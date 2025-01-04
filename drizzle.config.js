/** @type {import("drizzle-kit").Config} */
    export default {
        schema: "./utils/schema.tsx",
        dialect: 'postgresql',
        dbCredentials: {
            url: 'postgresql://geradoria_owner:2NQgvBfpXeb5@ep-solitary-field-a57iicb6.us-east-2.aws.neon.tech/geradoria?sslmode=require'
        }
    }