<template>
    <Layout>
        <Markdown>
            # Tip
        </Markdown>

        <CodePreview :vertical="true">
            <AtTip icon="phone"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus integer dictum platea." />
        </CodePreview>

        <Markdown>
            # Tip - Icon Right
        </Markdown>

        <CodePreview :vertical="true">
            <AtTip reverse="true"
                   icon="phone"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus integer dictum platea." />
        </CodePreview>

        <Markdown>
            # Tip - Image
        </Markdown>

        <CodePreview :vertical="true">
            <AtTip img="true"
                   lazy="true"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus integer dictum platea."
            />
        </CodePreview>
        <Markdown>
            # Tip - Image Right
        </Markdown>

        <CodePreview :vertical="true">
            <AtTip reverse="true"
                   img="true"
                   title="Lorem ipsum dolor"
                   text="Malesuada potenti lacus magnis tempor euismod phasellus integer dictum platea." />
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
