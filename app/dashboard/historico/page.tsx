// Importações
    import { Button } from "@/components/ui/button";
    import {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
    } from "@/components/ui/table";
    import { db } from "@/utils/db";
    import { AIOutput } from "@/utils/schema";
    import { Code2, Hash, Newspaper } from "lucide-react";

    interface HistoryItem {
        icon: "code" | "hashtag" | "blog";
        template: string;
        aiResp: string;
        date: string;
        words: number;
    }

  // Componente para os ícones
    const IconComponent = ({ type }: { type: HistoryItem["icon"] }) => {
        switch (type) {
        case "code":
            return <Code2 className="h-5 w-5 text-gray-600" />;
        case "hashtag":
            return <Hash className="h-5 w-5 text-gray-600" />;
        case "blog":
            return <Newspaper className="h-5 w-5 text-gray-600" />;
        default:
            return null;
        }
    };

 // Função para buscar dados no servidor
    async function fetchHistoryData(): Promise<HistoryItem[]> {
    try {
    const result = await db
        .select({
            template: AIOutput.templateSlug,
            aiResp: AIOutput.aiResponse,
            date: AIOutput.createdAt,
        })
        .from(AIOutput)
        .execute();

    return result.map((item: any) => ({
        icon: determineIcon(item.template),
        template: item.template,
        aiResp: item.aiResp,
        date: new Date(item.date).toLocaleDateString(),
        words: item.aiResp.split(/\s+/).filter(Boolean).length,
    }));
    } catch (error) {
        console.error("Error fetching history data:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

  // Função auxiliar para determinar o ícone
    function determineIcon(template: string): HistoryItem["icon"] {
        if (template.includes("code")) return "code";
        if (template.includes("tag")) return "hashtag";
        if (template.includes("blog")) return "blog";
        return "blog"; // Ícone padrão
    }

  // Componente principal
    export default async function HistoryTable() {
    const historyData = (await fetchHistoryData()) || []; // Valor padrão como array vazio

    return (
    <div className="container mx-auto py-10">
        <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Histórico</h1>
            <p className="text-muted-foreground">
                Pesquise seu conteúdo de IA gerado anteriormente
            </p>
        </div>
        <div className="rounded-lg border bg-white p-5">
            <Table>
                <TableHeader>
                <TableRow className="bg-white">
                    <TableHead className="w-[200px] font-bold text-xl">TEMPLATE</TableHead>
                    <TableHead className="w-[400px] font-bold text-xl">RESPOSTA</TableHead>
                    <TableHead className="w-[150px] font-bold text-xl">DATA</TableHead>
                    <TableHead className="w-[100px] font-bold text-xl">PALAVRAS</TableHead>
                    <TableHead className="w-[100px] font-bold text-xl">COPIAR</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {historyData.length > 0 ? (
                    historyData.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="flex items-center gap-2">
                            <IconComponent type={item.icon} />
                            {item.template}
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground break-words">
                            {item.aiResp}
                        </TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.words}</TableCell>
                        <TableCell>
                            <Button>Copy</Button>
                        </TableCell>
                    </TableRow>
                    ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">
                                No data available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </div>
    );
}
