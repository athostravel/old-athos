<template>
    <Layout>
        <Markdown>
            # Select
        </Markdown>

        <CodePreview :vertical="true">
            <AtSelect :options="fruits" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtSelect label="Favourite fruit" :options="fruits" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtSelect label="Favourite fruit" :options="fruits" disabled />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtSelect
                :options="fruits"
                label="Favourite fruit"
                icon-align="left"
            />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtSelect
                :options="fruits"
                label="Favourite fruit"
                icon-detail
            />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtSelect
                :options="fruits"
                label="Favourite fruit"
                icon-align="left"
                icon-detail
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
        },
        data () {
            return {
                fruits: [
                    { text: 'Apple' },
                    { text: 'Kiwi' },
                    { text: 'Banana' }
                ]
            }
        }
    }
</script>
