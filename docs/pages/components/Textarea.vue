<template>
    <Layout>
        <Markdown>
            # Textarea
        </Markdown>

        <CodePreview :vertical="true">
            <AtTextarea
                placeholder="Message"
                label="Message"
            />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtTextarea
                placeholder="Message"
                label="Message"
                size="tiny"
            />
            <AtTextarea
                placeholder="Message"
                label="Message"
                size="small"
            />
            <AtTextarea
                placeholder="Message"
                label="Message"
            />
            <AtTextarea
                placeholder="Message"
                label="Message"
                size="medium"
            />
            <AtTextarea
                placeholder="Message"
                label="Message"
                size="large"
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
