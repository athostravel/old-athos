<template>
    <Layout>
        <Markdown>
            # Price
        </Markdown>

        <CodePreview width="435" vertical>
            <AtPrice text="desde" before="600" value="400"/>
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
