---
transition: slide-left
---

## Store
- 빈 스토어를 새로 만드는 기능을 한다.
- Provider를 이용하여 Store를 공유한다.
- 스토어 기능은 **atom**의 값을 얻는 `get`, 값을 변경하는 `set`, 원자변경을 구독하는 방법 `sub` 세가지가 있다.

---
transition: slide-left
---

```javascript
const myStore = createStore()

const countAtom = atom(0)
myStore.set(countAtom, 1)
const unsub = myStore.sub(countAtom, () => {
  console.log('countAtom value is changed to', myStore.get(countAtom))
})
// unsub() to unsubscribe

const Root = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
)
```