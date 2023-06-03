import React from "react"
import { PageLayout } from "../../components/layout"
import { Bell, Gear, MagnifyingGlass } from "phosphor-react"
import { Stack } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { Step1, Step2, Step3 } from "./steps"

const Onboarding = () => {
  const { step } = useParams()

  const navitems: {
    icon: React.ReactNode
    onIconClick: () => void
  }[] = [{
    icon: <MagnifyingGlass size={24} color="#934670" role='button' />,
    onIconClick: () => console.log('Visit')
  },
  {
    icon: <Gear size={24} color="#934670" role='button' />,
    onIconClick: () => console.log('Settings')
  },
  {
    icon: <Bell size={24} color="#934670" role='button' />,
    onIconClick: () => console.log('Notifications')
  }
]

  return (
    <PageLayout navItems={navitems}>
      {(() => {
        switch(step) {
          case '2':
            return <Step2 />
          case '3':
            return <Step3 />
          default:
            return <Step1 />
        }
      })()}
      <Stack p={2} />
    </PageLayout>
  )
}
export default Onboarding