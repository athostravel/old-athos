<template>
    <Layout>
        <Markdown>
            # CheckBox
        </Markdown>

        <CodePreview width="435" vertical>
            <AtCheckbox id="check" label="Checkbox" name="check" />
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
