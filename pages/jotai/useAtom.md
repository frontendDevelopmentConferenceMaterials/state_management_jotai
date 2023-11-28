---
transition: slide-left
---
## useAtom?

- `useAtom` hook은 원자 값을 읽는다. 상태는 원자 구성 및 원자 값의 [WeakMap](https://www.notion.so/useAtom-0218c52cc2f54cdb8f2399398aef25ac?pvs=21)으로 확인 할 수 있다.
- `useAtom` 함수는 React useState 와 같이 tuple(튜플)로서 atom 값과 update 함수를 반환한다.
- `useAtom` 의 초기값은 atom configuration을 취한다.

<aside 
  v-click="[1,2]"
  class="absolute p-4" 
  style="background: rgb(251, 243, 219)" 
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
>

💡 ***`WeakMap` 이란?***   
키/값 쌍의 모음으로, 키는 반드시 객체 또는 등록되지 않은 심볼이며 값은 임의의 JavaScript 타입이다.
`WeakMap`은 키에 대한 강력한 참조를 생성하지 않으므로, 객체가 `WeakMap`의 키에 포함되더라도 가비지 컬렉션의 대상이 된다.

</aside>

<aside v-click="[2,3]" class="absolute p-4" style="background: rgb(251, 243, 219)">

💡 ***`tuple(튜플)` 타입 이란?***   
정확히 명시된 개수 만큼의 원소를 가질 수 있다.
```javascript
const initialValue: [string, number] = [’text’, 123];
```

</aside>

---
transition: slide-left
---

## 사용법

```javascript {all|1|3|4|5|7-12|all}
const stableAtom = atom(0)
const Component = () => {
	const [value, updateValue] = useAtom(anAtom); // WeakMap타입으로 제공
	const [atomValue] = useAtom(atom(0)) 
	const [atomValue] = useAtom(stableAtom)
// component에서 계산된 atom을 사용한다면 useMemo를 통해 무한루프를 방지해줘야된다.
	const [derivedAtomValue] = useAtom(
		useMemo(
			() => atom((get) => get(stableAtom) * 2),
			[]
		)
	)
}
```

---
transition: slide-left
---

## UseAtomValue
atom의 값을 읽어오고 싶을때 사용
```javascript
const countAtom = atom(0)

const Counter = () => {
  const setCount = useSetAtom(countAtom)
  const count = useAtomValue(countAtom)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}
```

---
transition: slide-left
---

## UseSetAtom
atom의 값을 변경하고 싶을때 사용, 이 경우 atom값이 변경되어도 re-rendering을 발생시키지 않는다.

---
transition: slide-left
---
```javascript
const switchAtom = atom(false)

const SetTrueButton = () => {
  const setCount = useSetAtom(switchAtom)
  const setTrue = () => setCount(true)

  return (
    <div>
      <button onClick={setTrue}>Set True</button>
    </div>
  )
}

const SetFalseButton = () => {
  const setCount = useSetAtom(switchAtom)
  const setFalse = () => setCount(false)

  return (
    <div>
      <button onClick={setFalse}>Set False</button>
    </div>
  )
}

export default function App() {
  const state = useAtomValue(switchAtom)

  return (
    <div>
      State: <b>{state.toString()}</b>
      <SetTrueButton />
      <SetFalseButton />
    </div>
  )
}
```