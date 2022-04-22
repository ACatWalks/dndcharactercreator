import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'

function ClassCards(props) {
    return (
        <div>
            <Card>
                <Card.Img variant='top' src='https://i0.wp.com/www.hipstersanddragons.com/wp-content/uploads/2019/03/5e-barbarian-build-optimisation.jpg?resize=629%2C899&ssl=1' />
                <Card.Body>
                    <Card.Title>Barbarian</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/barbarian' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='primary' id='Barbarian' onClick={props.onClick}>Choose Barbarian</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://newbiedm.files.wordpress.com/2014/08/5dt58.jpg' />
                <Card.Body>
                    <Card.Title>Bard</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/bard' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='info' id='Bard' onClick={props.onClick}>Choose Bard</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://higherasperations.org/images/792999.png' />
                <Card.Body>
                    <Card.Title>Cleric</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/cleric' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='info' id='Cleric' onClick={props.onClick}>Choose Cleric</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://images-geeknative-com.exactdn.com/wp-content/uploads/2018/07/14164817/druid_by_exellero.jpg?strip=all&lossy=1&ssl=1' />
                <Card.Body>
                    <Card.Title>Druid</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/druid' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='info' id='Druid' onClick={props.onClick}>Choose Druid</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/e7/83/5e/e7835e583c8ac95b933d0f66415cbcbc.jpg' />
                <Card.Body>
                    <Card.Title>Fighter</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/fighter' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='primary' id='Fighter' onClick={props.onClick}>Choose Fighter</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/489/420/618/636274646181411106.png' />
                <Card.Body>
                    <Card.Title>Monk</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/monk' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='primary' id='Monk' onClick={props.onClick}>Choose Monk</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://cdnb.artstation.com/p/assets/images/images/018/042/073/large/lana-monx-.jpg?1558239663' />
                <Card.Body>
                    <Card.Title>Paladin</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/paladin' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='primary' id='Paladin' onClick={props.onClick}>Choose Paladin</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.pinimg.com/736x/6d/e8/6c/6de86c53edee12d0f949eeca18773e5b.jpg' />
                <Card.Body>
                    <Card.Title>Ranger</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/ranger' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='primary' id='Ranger' onClick={props.onClick}>Choose Ranger</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://wallpaper.dog/large/10726494.jpg' />
                <Card.Body>
                    <Card.Title>Rogue</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/rogue' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='primary' id='Rogue' onClick={props.onClick}>Choose Rogue</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://sagegamers.com/wp-content/uploads/2021/04/FireElf-768x1087.jpg' />
                <Card.Body>
                    <Card.Title>Sorcerer</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/sorcerer' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='info' id='Sorcerer' onClick={props.onClick}>Choose Sorcerer</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://i.redd.it/dpwh3oo8f6v21.jpg' />
                <Card.Body>
                    <Card.Title>Warlock</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/warlock' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='info' id='Warlock' onClick={props.onClick}>Choose Warlock</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant='top' src='https://wizardofthetavern.com/wp-content/uploads/2019/10/evocation-wizard-sculpting.jpg' />
                <Card.Body>
                    <Card.Title>Wizard</Card.Title>
                    <Card.Link href='https://www.dndbeyond.com/classes/wizard' target='_blank' rel='noreferrer noopener'>Learn More</Card.Link>
                    <Button variant='info' id='Wizard' onClick={props.onClick}>Choose Wizard</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClassCards