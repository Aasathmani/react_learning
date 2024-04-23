export  function Section({id,children,...probs}){
    return(
        <section {...probs}><h2>title</h2>
        {children}</section>

    );
}