'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { use } from 'react'

interface PROPS {
    params: Promise<{
        'template-slug': string
    }>
}

function CreateNewContent(props: PROPS) {
    // Desembrulha o params usando o React.use()
    const resolvedParams = use(props.params);

    // Obtém o template correspondente com base no slug
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug == resolvedParams['template-slug']
    );

    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

    const GenerateAiContent = async (formData: any) => {
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData) + ', ' + SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);

        setAiOutput(result?.response.text());
        await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
        setLoading(false);
    };

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData || '',
            templateSlug: slug || '',
            aiResponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress || '',
            createdAt: moment().format('DD-MM-YYYY'),
        });
        console.log(result);
    };

    return (
        <div className="p-5">
            <Link href={'/dashboard'}>
                <Button>
                    <ArrowLeft /> Voltar
                </Button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAiContent(v)}
                    loading={loading}
                />
                <div className="col-span-2">
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
