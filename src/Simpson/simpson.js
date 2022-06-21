function Simpson(props) {
    let {name,desc,picture} = props;
    return (<div>
        <div className={'block1'}>

            <img src={picture} alt=''/>
            <h2>{name}</h2>
            <p>{desc}</p>

        </div>

    </div>)
}
export default Simpson;