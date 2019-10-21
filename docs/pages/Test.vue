<template>
    <Layout>
        <Markdown>
            # Icon

            Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.
        </Markdown>

        <CodePreview :vertical="true">
            <Icon icon="info" />
        </CodePreview>

        <Message>
            <Markdown>
                Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.

                Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.
            </Markdown>
        </Message>

        <Message state="warning">
            <Markdown>
                Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.

                Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.
            </Markdown>
        </Message>

        <Message state="success">
            <Markdown>
                Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.

                Buefy is <code>compatible</code> with both Material <a href="#caca">Design Icons</a> , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack. They adapt to most elements background automatically — but you can also override their colors.
            </Markdown>
        </Message>

        <Markdown>
            Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
            They adapt to most elements background automatically — but you can also override their colors.

            - Lorem ipsum dolor sit amet.
            - Lorem ipsum dolor sit amet.
            - Lorem ipsum dolor sit amet.
            - Lorem ipsum dolor sit amet.
            - Lorem ipsum dolor sit amet.

            1. Lorem ipsum dolor sit amet.
            2. Lorem ipsum dolor sit amet.
            3. Lorem ipsum dolor sit amet.
            4. Lorem ipsum dolor sit amet.
            5. Lorem ipsum dolor sit amet.

            Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
            They adapt to most elements background automatically — but you can also override their colors.

            ### asdasdasd

            Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
            They adapt to most elements background automatically — but you can also override their colors.

            | asdasds | asdsd | sadasda                    |
            |---------|-------|----------------------------|
            | asdsad  | sdads | asdadasadasdasdasd sadsaas |

            #### Camión

            Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
            They adapt to most elements background automatically — but you can also override their colors.

            ##### asdasdasd

            Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
            They adapt to most elements background automatically — but you can also override their colors.

            ###### asdasdasd

            Buefy is compatible with both Material Design Icons , FontAwesome 4 and FontAwesome 5 but you can also add your custom icon pack.
            They adapt to most elements background automatically — but you can also override their colors.
        </Markdown>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'
    import CodePreview from '@/components/CodePreview/CodePreview.vue'
    import Icon from '@lib/components/Icon/Icon.vue'
    import Markdown from '@/components/Markdown/Markdown.vue'
    import Message from '@/components/Message/Message.vue'

    export default {
        components: {
            Layout,
            CodePreview,
            Icon,
            Markdown,
            Message
        }
    }
</script>
