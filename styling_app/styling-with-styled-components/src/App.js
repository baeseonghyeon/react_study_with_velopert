import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./Components/Button";
import Dialog from "./Components/Dialog";

const AppBlock = styled.div`
	width: 512px;
	margin: 0 auto;
	margin-top: 4rem;
	border: 1px solid black;
	padding: 1rem;
`;

const ButtonGroup = styled.div`
	& + & {
		margin-top: 1rem;
	}
`;

// Circle 컴포넌트에서는 color props 값을 설정해줬으면 해당 값을 배경색으로 설정하고, 그렇지 않으면 검정색을 배경색으로 사용하도록 설정되었습니다.
// const Circle = styled.div`
//   	width: 5rem;
//   	height: 5rem;
//   	background: ${(props) => props.color || "black"};
//   	border-radius: 50%;
//   	${(props) =>
//     	props.huge &&
//     	css`
//       		width: 10rem;
//       		height: 10rem;
// 		`
// 	}
// `;

function App() {

	const [dialog, setDialog] = useState(false);
	const onClick = () => {
		setDialog(true);
	}
	const onConfirm = () => {
		console.log('확인');
		setDialog(false);
	}
	const onCancel = () => {
		console.log('취소');
		setDialog(false);
	}

	return (
		<ThemeProvider
			theme={{
				palette: {
					blue: "#228be6",
					gray: "#495057",
					pink: "#f06595",
				},
			}}
		>
			<>
				<AppBlock>
					{/* <Circle color="red" huge /> */}
					<ButtonGroup>
						<Button size="large">BUTTON</Button>
						<Button>BUTTON</Button>
						<Button size="small">BUTTON</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button color="gray" size="large">BUTTON</Button>
						<Button color="gray">BUTTON</Button>
						<Button color="gray" size="small">BUTTON</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button color="pink" size="large">BUTTON</Button>
						<Button color="pink">BUTTON</Button>
						<Button color="pink" size="small">BUTTON</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button size="large" outline>BUTTON</Button>
						<Button color="gray" outline>BUTTON</Button>
						<Button color="pink" size="small" outline>BUTTON</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button size="large" fullWidth>BUTTON</Button>
						<Button color="gray" size="large" fullWidth>BUTTON</Button>
						<Button color="pink" size="large" fullWidth>BUTTON</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button size="large" fullWidth onClick={onClick}>Dialog</Button>
					</ButtonGroup>
				</AppBlock>
				<Dialog
					title="정말로 삭제하시겠습니까?"
					confirmText="삭제"
					cancelText="취소"
					onConfirm={onConfirm}
					onCancel={onCancel}
					visible={dialog}
				>
					데이터를 정말로 삭제하시겠습니까?
				</Dialog>
			</>
		</ThemeProvider>
	);
}

export default App;
