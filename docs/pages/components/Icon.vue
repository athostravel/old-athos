<template>
    <Layout>
        <Markdown>
            # Icon
        </Markdown>

        <CodePreview :vertical="true">
            <AtIcon icon="phone" />
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
