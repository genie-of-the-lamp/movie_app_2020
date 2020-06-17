import React from "react";
// 생명주기 함수 동작 순서 render() -> componentDidMount()
// 즉 이렇게 코드 작성 시 바로 /movie-detail 로 접근 시 에러 발생함.
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    return <span>{location.state.title}</span>;
  }
}

export default Detail;
