function MyComponent5({name, whatToSay})
{
    return (
        <div>
            <h4>MyComponent 5</h4>
            <p>Hi - {name} !</p>
            <button onClick={whatToSay}>Say something</button>
        </div>
    );
}

export default MyComponent5;