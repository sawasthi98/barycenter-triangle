document.querySelector('#calculate').addEventListener('click',calculate)

function calculate (){

    const pointAx = document.querySelector('#xValA').value
    const pointAy = document.querySelector('#yValA').value
    const pointBx = document.querySelector('#xValB').value
    const pointBy = document.querySelector('#yValB').value
    const pointCx = document.querySelector('#xValC').value
    const pointCy = document.querySelector('#yValC').value

    // a = [pointAx,pointAy]
    // b = [pointBx,pointBy]
    // c = [pointCx,pointCy]

    let calculationX =( (pointAx + pointBx + pointCx) / 3 )
    let calculationY =( (pointAy + pointBy + pointCy) / 3 )
    calculationX = Number( calculationX )
    calculationY = Number( calculationY )
    
    calculationX = calculationX.toFixed(4)
    calculationY = calculationY.toFixed(4)

    document.querySelector('#locationBarycenter').innerText = `The location of the barycenter of the triangle is [${calculationX},${calculationY}]`

}