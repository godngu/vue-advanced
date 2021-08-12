# Controlled Component 예제

## Vue3 변경사항
### v-model 바인딩값 변경
- v-model 값을 바인딩 할때 기본값이 변경됐다.  
- value -> modelValue

### emit 변경
- emit하기 위해 `update:modelValue`를 선언해야 한다.
```javascript
emits: ['update:modelValue'],
```

