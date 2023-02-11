import { FormEvent } from "react"
import { FaSearch } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setCategories, setSearchText } from "../store/slice/filterSlice"
import { catType } from "../utils"
import ElpisImage from "./ElpisImage"

const QueryPart = () => {
	const dispatch = useDispatch()
	const { searchText, categories }: { categories: catType[], searchText: string } = useSelector((store: any) => store.filter)
	const searchHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// @ts-ignore
		const queryt: string = e.target['el-search-dms'].value.trim()
		dispatch(setSearchText(queryt))
	}
	const inputHandler = (e: FormEvent<HTMLInputElement>) => {
		const queryt: string = (e.target as HTMLInputElement)?.value
		dispatch(setSearchText(queryt))
	}
	const toggleCatActive = (cat: catType) => {
		const compare = (a: catType, b: catType) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		}
		dispatch(setCategories(categories.map(ca => ca.id !== cat.id ? ca : { ...ca, active: !ca.active }).sort(compare)))
	}
	const toggleAllCatActive = () => {
		const compare = (a: catType, b: catType) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		}
		const changeTo = !categories.every((val: any) => val.active === true)
		dispatch(setCategories(categories.map(ca => { return { ...ca, active: changeTo } }).sort(compare)))
	}
	return (
		<QueryPartStyle>
			<div className="inner">
				<div className="top-img">
					<ElpisImage src="/images/blur/elpis-logo.png" alt="Elpis logo" title="Elpis logo" removeNext={false} />
				</div>
				<form onSubmit={searchHandler} className="search-box">
					<input type="text" name="el-search-dms" id="el-search-dms" autoComplete="el-search-dms" placeholder="Search..." value={searchText} onInput={inputHandler} />
					<button className="inp-icon"><FaSearch /></button>
				</form>
				<div className="cats-hol">
					<div className={"cat " + (categories.every((val: any) => val.active === true) ? "active" : "")} onClick={() => toggleAllCatActive()}>All</div>
					{categories.map((cat) => <div className={"cat " + (cat.active ? "active" : "")} key={cat.id} onClick={() => toggleCatActive(cat)}>{cat.name}</div>)}
				</div>
			</div>
			<div className="inner-small">
				<form onSubmit={searchHandler} className="search-box">
					<input type="text" name="el-search-dms" id="el-search-dms" autoComplete="el-search-dms" placeholder="Search..." value={searchText} onInput={inputHandler} />
					<button className="inp-icon"><FaSearch /></button>
				</form>
				<div className="cats-hol">
					<div className={"cat " + (categories.every((val: any) => val.active === true) ? "active" : "")} onClick={() => toggleAllCatActive()}>All</div>
					{categories.map((cat) => <div className={"cat " + (cat.active ? "active" : "")} key={cat.id} onClick={() => toggleCatActive(cat)}>{cat.name}</div>)}
				</div>
			</div>
		</QueryPartStyle>
	)
}

const QueryPartStyle = styled.div`
	display: flex;
	overflow: auto;
	width: 250px;
	background: linear-gradient(145deg, #ffffff, #e0e0e0);
	z-index: 100;
	
	@media screen and (max-width: 700px) {
		width: 100%;
		background: linear-gradient(0deg, #ffffff, #f4f4f4);
		overflow: initial;
	}

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
			padding-bottom: 1pc;

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
					box-shadow: 2px 2px 5px #989898;
				}
			}

			button {
				position: absolute;
				border: 0 none;
				outline: 0 none;
				background-color: transparent;
				z-index: 15;
				right: 1pc;
				top: 2pc;
				bottom: 1pc;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #000;
				padding: 0 .6pc;
			}
		}

		.cats-hol {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 90%;
			overflow: auto;
			white-space: pre;
			margin: auto;
			padding: .5pc;

			.cat {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: .1pc .8pc;
				margin-right: .5pc;
				background: linear-gradient(145deg, #ececec, #b3b3b3);
				box-shadow:  1px 1px 3px #c5c5c5, -1px -1px 3px #ffffff;
				border-radius: .5pc;
				cursor: pointer;
				opacity: .5;

				&:hover {
					background: linear-gradient(145deg, #ececec, #929292);
				}
				
				&.active {
					opacity: 1;
				}
			}
		}
	}

	.inner-small {
		display: none;
		padding: 1pc .5pc;
		padding-bottom: 0;
		width: 100%;
		margin: auto 0;

		@media screen and (max-width: 700px) {
			display: block;
		}
		
		.search-box {
			padding: 1pc;
			padding-bottom: 1pc;

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
					box-shadow: 2px 2px 5px #989898;
				}
			}

			button {
				position: absolute;
				border: 0 none;
				outline: 0 none;
				background-color: transparent;
				z-index: 15;
				right: 1pc;
				top: 1pc;
				bottom: 1pc;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #000;
				padding: 0 .6pc;
			}
		}

		.cats-hol {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 90%;
			overflow: auto;
			white-space: pre;
			margin: auto;
			padding: .5pc;

			.cat {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: .1pc .8pc;
				margin-right: .5pc;
				background: linear-gradient(145deg, #ececec, #b3b3b3);
				box-shadow:  1px 1px 3px #c5c5c5, -1px -1px 3px #ffffff;
				border-radius: .5pc;
				cursor: pointer;
				opacity: .5;

				&:hover {
					background: linear-gradient(145deg, #ececec, #929292);
				}
				
				&.active {
					opacity: 1;
				}
			}
		}
	}
`

export default QueryPart