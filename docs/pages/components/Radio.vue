<template>
    <Layout>
        <Markdown>
            # Radio
        </Markdown>

        <CodePreview width="435" vertical>
            <AtRadio label="Radio dfsdf" name="radio-option" />
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
