<template>
    <Layout>
        <Markdown>
            # Price Button
        </Markdown>

        <CodePreview width="435" vertical>
            <AtPriceButton
                tag="a"
                text="desde"
                before="600"
                value="400"
                buttonIcon="arrow-down"
            >
                <AtIcon icon="phone"/>
            </AtPriceButton >
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
