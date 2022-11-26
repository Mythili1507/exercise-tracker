function MyComponent3(props)
{
    return (
        <div>
            <h4>MyComponent 3</h4>
            <label>First name</label> : <label>{props.firstName}</label>
            <br/>
            <label>Last name</label> : <label>{props.lastName}</label>
        </div>
    );
}

export default MyComponent3;