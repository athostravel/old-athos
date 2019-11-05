<template>
    <Layout>
        <Markdown>
            # Toggle Switch
        </Markdown>

        <CodePreview width="435" vertical>
            <AtToggleSwitch id="toggleSwitch" label=" " name="toggleSwitch" text="text" />
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
