<template>
    <Layout>
        <Markdown>
            # Text
        </Markdown>

        <CodePreview :vertical="true">
            <AtText />
        </CodePreview>

        <Markdown>
            # Text with background
        </Markdown>

        <CodePreview :vertical="true">
            <AtText background />
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
