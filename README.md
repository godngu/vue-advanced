# vue-advanced

## new 프로젝트 생성
$ vue create vue-news

### 패키지 설치
```shell
$ npm i axios --save
```  
~~$ npm i vue-router --save~~
```shell
$ npm i vue-router@next
```  
~~$ npm i vuex~~
```shell
$ npm i vuex@next --save
```

## async-await 프로젝트 생성
$ vue create async-await

## 컴포넌트 디자인 패턴
1. Common : 기본적인 컴포넌트 등록과 컴포넌트 통신
2. Slot : 마크업 확장이 가능한 컴포넌트
3. Controlled : 결합력이 높은 컴포넌트
4. Renderless : 데이터 처리 컴포넌트


## 프로젝트 생성
```shell
$ vue create common
$ vue create slots
$ vue create controlled
$ vue create renderless
```


## 프로젝트 배포
- [Netlify](https://www.netlify.com/) 퍼블리싱 서비스  
- [Vue CLI 배포 설명 페이지 링크](https://cli.vuejs.org/guide/deployment.html#gitlab-pages)

### Build Settings
| 항목 | 입력 |
| --- | --- |  
| Repository | github.com/godngu/vue-advanced |  
| Base Directory | vue-news |
| Build command | npm run build
| Publish directory | vue-news/dist |


## 환경변수 사용
- `.env` 파일 생성
- `key=value` 형태로 기입한다.
- `VUE_` prefix를 붙이면 별도의 설정 없이 컴포넌트에서 호출이 가능하다.
```javascript
console.log(process.env.VUE_APP_TITLE);
```
  
