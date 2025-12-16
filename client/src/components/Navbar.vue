<script>
export default {
    data() {
        return {
            theme: localStorage.getItem('theme') || 'light'
        };
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
            document.documentElement.setAttribute('data-theme', this.theme);
        }
    },
    mounted() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }
};
</script>

<template>
    <nav class="navbar my-navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item has-text-white">
                <p>TPT tagasiside rakendus</p>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <button class="button is-primary">Logi sisse</button>
                    <button class="button">Registreeru</button>
                </div>

                <div class="navbar-item">
                    <button class="button" @click="toggleTheme">
                        {{ theme === 'light' ? '☀️' : '🌙' }}
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        background-color: #14468a;
    }
</style>