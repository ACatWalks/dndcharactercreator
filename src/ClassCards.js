import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'

function ClassCards() {
    return (
        <div>
            <Card>
                <Card.Img variant='top' src='https://i0.wp.com/www.hipstersanddragons.com/wp-content/uploads/2019/03/5e-barbarian-build-optimisation.jpg?resize=629%2C899&ssl=1' />
                <Card.Body>
                    <Card.Title>Barbarian</Card.Title>
                    <Button variant='primary'>Choose Barbarian</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://newbiedm.files.wordpress.com/2014/08/5dt58.jpg' />
                <Card.Body>
                    <Card.Title>Bard</Card.Title>
                    <Button variant='info'>Choose Bard</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://higherasperations.org/images/792999.png' />
                <Card.Body>
                    <Card.Title>Cleric</Card.Title>
                    <Button variant='info'>Choose Cleric</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://images-geeknative-com.exactdn.com/wp-content/uploads/2018/07/14164817/druid_by_exellero.jpg?strip=all&lossy=1&ssl=1' />
                <Card.Body>
                    <Card.Title>Druid</Card.Title>
                    <Button variant='info'>Choose Druid</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/e7/83/5e/e7835e583c8ac95b933d0f66415cbcbc.jpg' />
                <Card.Body>
                    <Card.Title>Fighter</Card.Title>
                    <Button variant='primary'>Choose Fighter</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/489/420/618/636274646181411106.png' />
                <Card.Body>
                    <Card.Title>Monk</Card.Title>
                    <Button variant='primary'>Choose Monk</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://cdnb.artstation.com/p/assets/images/images/018/042/073/large/lana-monx-.jpg?1558239663' />
                <Card.Body>
                    <Card.Title>Paladin</Card.Title>
                    <Button variant='primary'>Choose Paladin</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/6d/e8/6c/6de86c53edee12d0f949eeca18773e5b.jpg' />
                <Card.Body>
                    <Card.Title>Ranger</Card.Title>
                    <Button variant='primary'>Choose Ranger</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://wallpaper.dog/large/10726494.jpg' />
                <Card.Body>
                    <Card.Title>Rogue</Card.Title>
                    <Button variant='primary'>Choose Rogue</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://sagegamers.com/wp-content/uploads/2021/04/FireElf-768x1087.jpg' />
                <Card.Body>
                    <Card.Title>Sorcerer</Card.Title>
                    <Button variant='info'>Choose Sorcerer</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.redd.it/dpwh3oo8f6v21.jpg' />
                <Card.Body>
                    <Card.Title>Warlock</Card.Title>
                    <Button variant='info'>Choose Warlock</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://wizardofthetavern.com/wp-content/uploads/2019/10/evocation-wizard-sculpting.jpg' />
                <Card.Body>
                    <Card.Title>Wizard</Card.Title>
                    <Button variant='info'>Choose Wizard</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClassCards