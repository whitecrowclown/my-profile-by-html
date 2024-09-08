# My Profile by HTML

**My Profile by HTML** 프로젝트는 개인 프로필을 소개하고, 경력, 사용 가능한 기술, 연락처 정보를 웹 사이트 형식으로 제공하는 프로젝트입니다. 이 프로젝트는 HTML과 CSS를 기반으로 하며, GitHub Pages를 통해 호스팅됩니다.

## 사이트 링크

- [메인 페이지](https://whitecrowclown.github.io/my-profile-by-html/index.html)
- [소개 페이지](https://whitecrowclown.github.io/my-profile-by-html/html/about.html)
- [연락처 페이지](https://whitecrowclown.github.io/my-profile-by-html/html/contact.html)

## 프로젝트 구성

### 1. [메인 페이지 (index.html)](https://whitecrowclown.github.io/my-profile-by-html/index.html)

- **역할**: 개인 프로필의 첫 페이지로, 사용자가 처음 접하게 되는 화면입니다.
- **설명**: 홈페이지에는 주요 섹션(소개, 서비스, 연락처)에 대한 링크가 포함되어 있으며, 웹사이트에 대한 간략한 설명을 제공합니다.
- **기능**:
  - 웹사이트 제목과 간단한 설명을 포함한 **Hero 섹션**.
  - 소개, 서비스, 연락처 섹션으로 연결되는 **내비게이션**.
  - 각 섹션으로 이동할 수 있는 내부 링크를 제공.

### 2. [소개 페이지 (about.html)](https://whitecrowclown.github.io/my-profile-by-html/html/about.html)

- **역할**: 사용자가 본 강의, 읽은 책, 사용 가능한 기술을 소개하는 페이지입니다.
- **설명**: 이 페이지는 3개의 카드로 구성되어, 사용자가 학습한 내용과 지식을 보여줍니다.
- **기능**:
  - **내가 본 강의**: 사용자가 수강한 강의 목록을 간단히 설명합니다.
  - **내가 읽은 책**: 사용자가 읽은 책 목록이나 독서 경험을 포함합니다.
  - **내가 사용 가능한 기술**: 사용 가능한 기술과 관련된 내용을 포함한 카드를 통해 기술 스택을 설명합니다.
- **디자인**:
  - **카드 레이아웃**으로 정보를 깔끔하게 정리.
  - 반응형 디자인 적용으로 모바일에서도 보기 좋게 구현.

### 3. [연락처 페이지 (contact.html)](https://whitecrowclown.github.io/my-profile-by-html/html/contact.html)

- **역할**: 사용자가 문의나 연락을 할 수 있는 폼을 제공하는 페이지입니다.
- **설명**: 사용자는 이름, 이메일, 메시지를 입력하여 문의를 보낼 수 있습니다.
- **기능**:
  - **연락처 폼**: 사용자의 이름, 이메일, 메시지를 입력받아 이메일로 전송될 수 있도록 구성된 폼.
  - 제출 버튼을 클릭하면 메시지가 전송되는 구조.
  - 현재 정적 페이지로 구성되어 있으므로 서버 측에서 이메일 전송 기능은 추가로 구현 필요.

## 기술 스택

- **HTML5**: 웹 페이지 구조화에 사용.
- **CSS3**: 웹 페이지의 디자인과 레이아웃을 구성하는 데 사용.
- **JavaScript**: 이후 이메일 전송이나 동적 기능을 추가할 때 사용할 수 있음.
- **GitHub Pages**: 프로젝트를 웹 호스팅하여 온라인에서 접근할 수 있게 함.

## 반응형 디자인

모든 페이지는 **반응형 디자인**을 적용하여, 데스크톱과 모바일 환경 모두에서 잘 표시되도록 설계되었습니다. `@media` 쿼리를 사용해 작은 화면에서는 레이아웃이 자동으로 조정됩니다.

## 프로젝트 설치 및 사용

1. **GitHub 레포지토리 클론**
   ```bash
   git clone https://github.com/whitecrowclown/my-profile-by-html.git
