<template>
    <Layout>
        <Markdown>
            # Button

            The classic button, in different colors, sizes, and states.
        </Markdown>

        <CodePreview elements="horizontal" vertical>
            <AtButton text="Button" />
            <AtButton text="Button" icon="avatar" />
            <AtButton text="Button" icon="avatar" icon-align="right" />
            <AtButton icon="avatar" />
            <AtButton text="Disabled" disabled />
            <AtButton text="Tiny" size="tiny" />
            <AtButton text="Small" size="small" />
            <AtButton text="Default" />
            <AtButton text="Medium" size="medium" />
            <AtButton text="Large" size="large" />
        </CodePreview>

        <Markdown>
            ## Casper
        </Markdown>

        <CodePreview elements="horizontal" vertical>
            <AtButton text="Casper" casper />
            <AtButton text="Casper" icon="avatar" casper />
            <AtButton text="Casper" icon="avatar" icon-align="right" casper />
            <AtButton icon="avatar" casper />
            <AtButton text="Disabled" disabled casper />
            <AtButton text="Tiny" size="tiny" casper />
            <AtButton text="Small" size="small" casper />
            <AtButton text="Default" casper />
            <AtButton text="Medium" size="medium" casper />
            <AtButton text="Large" size="large" casper />
        </CodePreview>

        <Markdown>
            ## Outlined
        </Markdown>

        <CodePreview elements="horizontal" vertical>
            <AtButton text="Outlined" outlined />
            <AtButton text="Outlined" icon="avatar" outlined />
            <AtButton text="Outlined" icon="avatar" icon-align="right" outlined />
            <AtButton icon="avatar" outlined />
            <AtButton text="Disabled" disabled outlined />
            <AtButton text="Tiny" size="tiny" outlined />
            <AtButton text="Small" size="small" outlined />
            <AtButton text="Default" outlined />
            <AtButton text="Medium" size="medium" outlined />
            <AtButton text="Large" size="large" outlined />
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
