<template>
    <Layout>
        <Markdown>
            # Banner
        </Markdown>

        <CodePreview vertical>
            <AtBanner
                valign="bottom"
                align="center"
                text="Button"
                shadow
                radius
            />
        </CodePreview>

        <CodePreview vertical>
            <AtBannerOrion />
        </CodePreview>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'
    import Message from '@/components/Message/Message.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Markdown,
            Message
        }
    }
</script>
