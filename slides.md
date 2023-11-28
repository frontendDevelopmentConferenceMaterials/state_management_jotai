---
theme: eloc
title: '상퇘관리 라이브러리 jotai'
author: 'blaze(김동인)'
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
download: false
exportFilename: 'jotai'
export:
  format: pdf
  timeouit: 30000
  dark: false
  withClicks: false
  withToc: false
---

# Jotai

발표자 : <b>blaze(김동인)</b> 
  <a href="https://github.com/in-kim" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
---

## Jotai?

- **React Context**의 추가적인 re-rendering 문제, memozation 문제등을 해결하고 싶을경우
    
    ⚠️ useContext는 부모 컴포넌트가 리렌더시 하위 컴포넌트까지 렌더링 발생
    
- **Atomic 디자인 패턴**을 사용하고 싶을 경우
- [**Suspense**](https://www.notion.so/Suspense-8f03b7ec958a4609b43c4a7b9d500c5e?pvs=21)을 활용하고 싶을 경우

---
transition: slide-left
---

## Core Api

- Atom
- useAtom
- Store
- Provider

---
src: ./pages/jotai/atom.md
transition: slide-left
---

---
src: ./pages/jotai/useAtom.md
transition: slide-left
---

---
src: ./pages/jotai/store.md
transition: slide-left
---

---
src: ./pages/jotai/provider.md
transition: slide-left
---

---
transition: slide-left
---

***감사합니다.***


<!-- <p
  v-click
  class="absolute top-63 w-120 h-6"
  style="border: 3px dashed red; margin-left:-14px"
/>

<p
  v-click
  class="absolute top-69 w-123 h-35"
  style="border: 3px dashed red; margin-left:-2px"
/>

<p
  v-click
  class="absolute top-108 w-120 h-37"
  style="border: 3px dashed red; margin-left:-14px"
/> -->