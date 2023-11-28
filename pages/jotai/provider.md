---
transition: slide-left
---

## Provider
- Provider는 구성 요소 하위 트리에 대한 상태를 제공하기 위해 사용된다. 
- 여러개의 Provider는 여러 하위 트리에 사용할 수 있으며 중첩될 수도 있다. (React Context처럼 동작)

💡`Provider`는 아래 세 가지 이유로 유용하다.
1. 각 하위 트리에 대해 다른 상태를 제공한다.
2. 원자의 초기 값을 받는다.
3. 다시 마운트 됐을 때 원자 값을 초기화 한다.

---
transition: slide-left
---

`provider` 설정
```javascript
const myStore = createStore()

const Root = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
)
```

`useStore` 사용하여 컴포넌트 트리에 있는 store 반환
```javascript
const Component = () => {
  const store = useStore()
  // ...
}
```