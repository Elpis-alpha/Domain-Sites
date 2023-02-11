import { FormEvent } from "react"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import { sendMiniMessage } from "../controllers/MessageCtrl"
import ElpisImage from "./ElpisImage"

const QueryPart = () => {
	const searchHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// @ts-ignore
		const queryt: string = e.target['el-search-dms'].value.trim()

		sendMiniMessage({
			icon: { name: "info" },
			content: { text: `Searching for ${queryt}` },
		}, 1000)
	}
	return (
		<QueryPartStyle>
			<div className="inner">
				<div className="top-img">
					<ElpisImage src="/images/blur/elpis-logo.png" alt="Elpis logo" title="Elpis logo" removeNext={false} />
				</div>
				<form onSubmit={searchHandler} className="search-box">
					<input type="text" name="el-search-dms" id="el-search-dms" autoComplete="el-search-dms" placeholder="Search..." />
					<button className="inp-icon"><FaSearch /></button>
				</form>
			</div>
		</QueryPartStyle>
	)
}

const QueryPartStyle = styled.div`
	display: flex;
	overflow: auto;
	width: 250px;
	background-color: #856ec6;
	color: #eee;

	.inner {
		padding: 2pc .5pc;
		width: 100%;
		margin: auto 0;

		@media screen and (max-width: 700px) {
			display: none;
		}

		.top-img {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			img {
				width: 220px;
			}
		}

		.search-box {
			padding: 2pc 1pc;

			input {
				border: 0 none;
				outline: 0 none;
				width: 100%;
				padding: .2pc .8pc;
				padding-right: 2pc;
				background-color: #fff;
				transition: box-shadow .5s;
				/* box-shadow: 1px 1px 3px #0f5380; */
				border-radius: .3pc;
				
				&:focus {
					box-shadow: 2px 2px 5px #0f5380;
				}
			}

			button {
				position: absolute;
				border: 0 none;
				outline: 0 none;
				background-color: transparent;
				z-index: 15;
				right: 1pc;
				top: 1.5pc;
				bottom: 1.5pc;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #000;
				padding: 0 .6pc;
			}
		}
	}
`

export default QueryPart