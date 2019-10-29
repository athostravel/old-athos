<template>
    <Layout>
        <Markdown>
            # Banner
        </Markdown>

        <CodePreview width="435" vertical>
            <AtBanner
                valign="bottom"
                align="center"
                text="Button"
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
