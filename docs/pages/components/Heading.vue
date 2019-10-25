<template>
    <Layout>
        <Markdown>
            # Section Heading
        </Markdown>

        <CodePreview width="435" vertical>
            <AtHeading
                title="Título de Encabezado"
                :text="['Texto de encabezado opcional']"
                icon="arrow-down"
            />
        </CodePreview>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Markdown
        }
    }
</script>
