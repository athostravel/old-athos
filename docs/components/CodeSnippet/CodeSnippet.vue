<template>
    <div class="c-docs-code">
        <pre><code id="code-snippet"><slot></slot></code></pre>
    </div>
</template>

<script>
    import beautify from 'js-beautify'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github.css'

    export default {
        name: 'CodeSnippet',
        props: {
            language: {
                type: String,
                default: 'html'
            }
        },
        mounted: function () {
            const code = this.$el.querySelector('#code-snippet')
            code.innerHTML = code.innerHTML.replace(/<!---->/g, '')
            code.innerHTML = this.beautifyCode(code)
        },
        methods: {
            renderCodeSnippet: function (code, language) {
                return hljs.highlight(language, code).value
            },
            beautifyCode (code) {
                let beautifyCode

                if (this.language === 'html') {
                    beautifyCode = beautify.html(code.innerHTML, {
                        preserve_newlines: false,
                        inline: []
                    })
                }

                if (this.language === 'js' || this.language === 'javascript') {
                    beautifyCode = beautify(code.innerHTML)
                }

                if (this.language === 'css') {
                    beautifyCode = beautify.css(code.innerHTML)
                }

                return this.renderCodeSnippet(beautifyCode, this.language)
            }
        }
    }
</script>

<style lang="scss">
  .c-docs-code {
    max-width: 100%;
    max-height: 40rem;
    overflow: auto;
    padding: 2rem 1.5rem;
    display: flex;
    background-color: #f7f7f7;
    line-height: 1.8;
    margin-top: 2rem;
    margin-bottom: 2rem;

    &::after {
      content: "";
      display: block;
      width: 1.5rem;
      flex-shrink: 0;
    }
  }
</style>
