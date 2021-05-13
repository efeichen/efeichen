import React from "react"
import tw, { styled } from "twin.macro"
import { FiArrowRight } from "react-icons/fi"

const ProjectCard = ({ imgSrc, title, description }) => {
  return (
    <Card>
      <CardImg>
        <img src={imgSrc} alt="" />
      </CardImg>
      <CardBody>
        <div className="card__icon">
          <FiArrowRight />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </CardBody>
    </Card>
  )
}

const Card = styled.div`
  ${tw`container bg-white lg:rounded-lg overflow-hidden shadow-lg`}
`

const CardImg = styled.div`
  ${tw`border-b-2 border-gray-800`}

  img {
    ${tw`w-full h-full object-cover`}
  }
`

const CardBody = styled.div`
  ${tw`p-8 text-black relative`}

  .card__icon {
    width: fit-content;
    right: 40px;
    top: -25px;
    ${tw`p-4 rounded-full text-lg absolute bg-gray-800 text-white`}
  }

  h1 {
    ${tw`text-5xl mb-8`}
  }

  p {
    font-family: "Space Mono", monospace;
    ${tw`text-xl`};
  }
`

export default ProjectCard
