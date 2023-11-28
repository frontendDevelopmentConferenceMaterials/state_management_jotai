---
transition: slide-left
---
## Atom?

- atom함수는 `atom config`를 만드는 역할을 한다.
- `atom config`는 정의일 뿐이고 값이 없는것을 의미한다.
- `atom config`는 불변 개체이고 값을 보유하지 않는다. **atom 값은 저장소에 존재**한다.
- `React`의 `useState`와 달리 원자는 특정 구성 요소에 연결되지 않는다.

---
transition: slide-left
---

## 사용법

``` javascript
import { atom } from 'jotai'

const priceAtom = atom(10)
const messageAtom = atom('hello')
const projectAtom = atom({ id: 12, name: 'good stuff'})
```

---
transition: slide-left
---

## Atom Patterns

- Read-only atom
- Write-only atom
- Read-Write atom

---
transition: slide-left
---

```javascript {all|2|3-9|11-17}

const readOnlyAtom = atom((get) => get(priceAtom) * 2)
const writeOnlyAtom = atom(
	null, // 첫 번째 인수에 'null'을 전달하는 규칙
	(get, set, update) => {
		// 'update'는 이 원자를 업데이트하기 위해 수신한 단일 값
		set(priceAtom, get(priceAtom) - update.discount)
	}
)

const readWriteAtom = atom(
	(get) => get(priceAtom) * 2,
	(get, set, newPrice) => {
		set(priceAtom, newPrice / 2)
		// 동시에 원하는 만큼 원자를 설정할 수 있다.
	}
)
```

<div class="description absolute top-23 transform m-5 p-5 w-full h-full" style="background:rgba(0,0,0,0.9); color:#fff" v-click>
  <h2>📕 Note</h2>
  <p>
    Atom 구성은 어디에서나 만들 수 있지만 참조 평등이 중요하 동적으로도 만들수 있다.<br />
    렌더 기능에서 Atom을 만들려면 `useMemo`를 사용하거나 ref를 사용해야한다.
    <br />
    사용하지 않는다면, 무한 루프를 일으킬 수 있다.
  </p>

  ```javascript
  const Component = ({value}) => {
    const valueAtom = useMemo(() => atom({ value }), [value])
  }
  ```

</div>

---
transition: slide-left
---

## onMount property

- atom config는 `mount`에 옵션 속성을 가질 수 있다.
- `onMount` 속성은 atom이 처음 사용될때 호출되고, `onUnmount`는 atom이 더 이상 사용되지 않을때(return) 호출된다.

```javascript
const anAtom = atom(1)
anAtom.onMount = (setAtom) => {
  console.log('atom is mounted in provider')
  setAtom(c => c + 1) // atom이 처음 사용될 때 anAtom 데이터를 1 증감시킴
  return () => { ... } // atom 마운트해제 시 실행
}
```

---
transition: slide-left
layout: full
---

## 고급 API

- `options.signal` AbortController를 사용하여 비동기 기능을 중단할 수 있다.

<div class="description absolute top-23 transform m-5 p-5 w-full h-full" style="background:rgba(0,0,0,0.9); color:#fff; overflow:auto" v-click>

```javascript
import { Suspense } from "react";
import { atom, useAtom } from "jotai";

const userIdAtom = atom(1);
const userAtom = atom(async (get, { signal }) => {
  const userId = get(userIdAtom);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`,
    { signal }
  );
  return response.json();
});

const Controls = () => {
  const [userId, setUserId] = useAtom(userIdAtom);
  return (
    <div>
      User Id: {userId}
      <button onClick={() => setUserId((c) => c - 1)}>Prev</button>
      <button onClick={() => setUserId((c) => c + 1)}>Next</button>
    </div>
  );
};

const UserName = () => {
  const [user] = useAtom(userAtom);
  return <div>User name: {user.name}</div>;
};

const App = () => (
  <>
    <Controls />
    <Suspense fallback="Loading...">
      <UserName />
    </Suspense>
  </>
);

export default App;
```
</div>