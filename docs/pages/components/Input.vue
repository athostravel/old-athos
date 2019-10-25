<template>
    <Layout>
        <Markdown>
            # Input
        </Markdown>

        <CodePreview :vertical="true">
            <AtInput />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput label="Fullname" placeholder="Fullname" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput label="Fullname" placeholder="Fullname" value="Antonio Banderas" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput label="Input disabled" placeholder="Input disabled" value="Antonio Banderas" disabled />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput label="Input readonly" placeholder="Input readonly" value="Antonio Banderas" readonly />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                icon="phone"
                icon-align="left"
            />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                icon="phone"
                icon-detail
            />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                icon="phone"
                icon-align="left"
                icon-detail
            />
        </CodePreview>

        <CodePreview :vertical="true">
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                size="tiny"
                icon="phone"
                icon-align="left"
                icon-detail
            />
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                size="small"
                icon="phone"
                icon-align="left"
                icon-detail
            />
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                icon="phone"
                icon-align="left"
                icon-detail
            />
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                size="medium"
                icon="phone"
                icon-align="left"
                icon-detail
            />
            <AtInput
                label="Telephone number"
                placeholder="Telephone number"
                type="tel"
                size="large"
                icon="phone"
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
        }
    }
</script>
