<template>
    <Layout>
        <Markdown>
            # Button

            The classic button, in different colors, sizes, and states.
        </Markdown>

        <CodePreview vertical>
            <AtButton text="Button" />
        </CodePreview>

        <Markdown>
            ## Types and states
        </Markdown>

        <CodePreview vertical>
            <AtButton text="Default" />
            <AtButton text="Outlined" outlined />
            <AtButton text="Disabled" disabled tag="button" />
        </CodePreview>

        <Markdown>
            ## Icons
        </Markdown>

        <CodePreview :vertical="true">
            <AtButton icon="avatar" />
            <AtButton icon="avatar" outlined />
            <AtButton text="Button" icon="avatar" />
            <AtButton text="Button" icon="avatar" outlined />
            <AtButton text="Button" icon="avatar" icon-align="right" tag="button" />
            <AtButton text="Button" outlined icon="avatar" icon-align="right" />
        </CodePreview>

        <Markdown>
            ## Sizes
        </Markdown>

        <CodePreview vertical>
            <AtButton text="Tiny" size="tiny" />
            <AtButton text="Small" size="small" />
            <AtButton text="Default" />
            <AtButton text="Medium" size="medium" />
            <AtButton text="Large" size="large" />
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
