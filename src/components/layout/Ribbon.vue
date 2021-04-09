<template>
    <div class="ribbon-wrapper">
        <div id="top">
            <div class="ribbon-container">
                <h2 class="ribbon">
                    <div class="ribbon-content">
                        <router-link to="/xbn/lottery/">FomoLotto is out, win your pot now!</router-link>

                    </div>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'CRibbon',
        components: {},
        props: {},
        data() {
            return {}
        },

        methods: {},
        mounted() {
        },
        beforeDestroy() {
        }
    }
</script>

<style scoped>

    .ribbon-wrapper {
        position: absolute;
        width: 100%;
    }

    #top {
        box-sizing: border-box;
        padding: 10px 0px;
    }

    #top {
        background: transparent;
    }

    h1 {
        color: #333;
        font-family: Zapfino, 'Edwardian Script ITC', cursive;
        font-size: 40px;
        font-weight: normal;
        text-align: center;
        text-shadow: 6px 4px 3px rgba(0, 0, 0, 0.5);
        line-height: 1.0;
        margin: 0 0 20px;
    }

    .ribbon-container {
        background: transparent !important;
        position: relative;
        z-index: 1;
    }

    .ribbon {
        /*background: hsl(30, 90%, 65%) url(http://portfolio.queenofwhisks.com/demo/overlay/noise.png);*/
        background-color: #F3AA43;
        box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.5);
        font-family: "Montserrat", "IBM Plex Sans", sans-serif;
        font-size: 14px;
        line-height: 1.0;
        text-align: center;
        margin: 0 auto;
        padding: 2px 0;
        position: relative;
        width: 90%;
    }

    .ribbon:before,
    .ribbon:after {
        border: 1.5em solid hsl(30, 82%, 62%);
        content: '';
        display: block;
        position: absolute;
        bottom: -1em;
        z-index: -1;
    }

    .ribbon:before {
        left: -2em;
        border-right-width: 1.5em;
        border-left-color: transparent;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .ribbon:after {
        right: -2em;
        border-left-width: 1.5em;
        border-right-color: transparent;
        box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .ribbon-content {
        border-top: 0.0625em dashed hsl(30, 90%, 44%);
        border-bottom: 0.0625em dashed hsl(30, 90%, 44%);
        box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(255, 255, 255, 0.08), 0px -1px 1px rgba(255, 255, 255, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.08);
        display: block;
        padding: 8px 0;
    }

    .ribbon-content:before,
    .ribbon-content:after {
        content: '';
        display: block;
        position: absolute;
        border-style: solid;
        border-color: hsl(30, 80%, 40%) transparent transparent transparent;
        bottom: -1em;
    }

    .ribbon-content:before {
        left: 0;
        border-width: 1em 0 0 1em;
    }

    .ribbon-content:after {
        right: 0;
        border-width: 1em 1em 0 0;
    }

    .ribbon a {
        color: white;
        text-decoration: none;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.25);
    }

    .ribbon a:hover {
        color: hsl(30, 90%, 43%);
    }

    .underpage {
        background: #f4f4f4 url(http://portfolio.queenofwhisks.com/demo/overlay/noise-paper.png);
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        color: #444;
        font-family: Garamond, 'Goudy Old Style', Times, 'Times New Roman', serif;
        line-height: 1.5;
        margin: 0 auto;
        padding: 4.5em 1.5em 1.5em;
        position: relative;
        top: -4em;
        width: 65%;
        z-index: -1;
    }

    .underpage p:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 800px) {
        .ribbon {
            width: 80% !important;
        }
    }

</style>
