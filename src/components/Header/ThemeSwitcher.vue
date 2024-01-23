<script lang="ts" setup>
import { ThemeInstance, useTheme } from 'vuetify';
import { ref, onMounted } from 'vue'


let isLight = ref(true);
const theme:ThemeInstance = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  theme.global.name.value == 'light' ? isLight.value = false : isLight.value = true; 
  
}
</script>


<template>
    <button class="theme-switch-btn">
        <div class="text" id="light-theme-text" :class="{'disabled': isLight}">Light</div>
        <div class="theme-switch-wrapper">
          <label for="theme-btn">
            <input @change="toggleTheme" type="checkbox" id="theme-btn">
            <div class="slider-wrapper">
              <div class="theme-btn-slider"></div>
              <span class="star star-1"></span>
              <span class="star star-2"></span>
              <span class="star star-3"></span>
              <span class="star star-4"></span>
              <span class="star star-5"></span>
              <span class="star star-6"></span>
            </div>
          </label>
        </div>
        <div class="text" :class="{'disabled': !isLight}" id="dark-theme-text">Dark</div>
    </button>
</template>


<style lang="scss" scoped>
.theme-switch-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-color);

    &  .text{
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--text-color);
    }
    & .disabled {
      color: var(--disabled-text-color);
      opacity: .6;
    }

    & .theme-switch-wrapper {
        position: relative;
        width: 100px;
        height: 50px;
        margin: 10px;
        background: var(--secondary-color);
        border-radius: 50px;
        & input {
          display: none;
        }
        & .slider-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            & .star {
              position: absolute;
              background-color: var(--tertiary-color);
              transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
              border-radius: 50%;
            }

            & .star-1 {
              top: 10px;
              left: 35px;
              z-index: 0;
              width: 30px;
              height: 3px;
            }

            & .star-2 {
              top: 18px;
              left: 28px;
              z-index: 1;
              width: 30px;
              height: 3px;
            }

            & .star-3 {
              top: 27px;
              left: 40px;
              z-index: 0;
              width: 30px;
              height: 3px;
            }

            & .star-4,
            & .star-5,
            & .star-6 {
              opacity: 0;
              transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
            }

            & .star-4 {
              top: 16px;
              left: 11px;
              z-index: 0;
              width: 2px;
              height: 2px;
              transform: translate3d(3px, 0, 0);
            }

            & .star-5 {
              top: 32px;
              left: 17px;
              z-index: 0;
              width: 3px;
              height: 3px;
              transform: translate3d(3px, 0, 0);
            }

            & .star-6 {
              top: 36px;
              left: 28px;
              z-index: 0;
              width: 2px;
              height: 2px;
              transform: translate3d(20px, 0, 0);
            }
        }
        & .theme-btn-slider {
          position: absolute;
          margin: 5px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary-color);
          transform: translateX(0px);
          transition: transform 0.6s;
        }
        & input:checked + .slider-wrapper .theme-btn-slider {
          background: transparent;
          transform: translateX(34px);
          box-shadow: 15px 0px 0 0 var(--primary-color);
        }
        & input:checked + .slider-wrapper {
          & .star-1 {
            width: 2px;
            height: 2px;
          }
    
          & .star-2 {
            width: 4px;
            height: 4px;
            transform: translate3d(20px, 0, 0);
          }
    
          & .star-3 {
            width: 2px;
            height: 2px;
            transform: translate3d(-7px, 0, 0);
          }
    
          & .star-4,
          & .star-5,
          & .star-6 {
            opacity: 1;
          }
          & .star-4 {
            transform: translate3d(10px, 0, 0);
            transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
          & .star-5 {
            transform: translate3d(0, 0, 0);
            transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
          & .star-6 {
            transform: translate3d(25px, 0, 0);
            transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
        }
    }
}

    
</style>