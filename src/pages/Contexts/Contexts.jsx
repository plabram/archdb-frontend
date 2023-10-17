import { useEffect, useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { getAllDataFromDb } from '../../api/calls'
import { Table, Thead, Tbody, Tr, Th, Stack, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react'
import { UserContext } from '../../App'
import { contextFields } from '../../const/dataFields'

const Contexts = () => {

  const [contexts, setContexts] = useState([{}])
  const { isLoggedIn } = useContext(UserContext)
  const keyInfo = contextFields.filter(field => field.keyInfo === true)



  useEffect(() => {
    getAllDataFromDb(setContexts, "contexts")
  }, [])

  return (
    <Stack spacing={5} m={5} className="contexts">
      <Breadcrumb separator='-'>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={NavLink} to='/contexts'>
            Contexts
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h2" size="md" m={5}>Contexts</Heading>
      {isLoggedIn ?
        <Link to="/add-context">
          <Button>Add Context</Button>
        </Link>
        : null}
      <Table variant='striped'>
        <Thead>
          <Tr>
            {keyInfo.map((info) => <Th key={info.id}>{info.name}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {contexts?.map((context, index) =>
            <Card key={index} data={context} type="contexts" keyInfo={keyInfo} />
          )}
        </Tbody>
      </Table>
    </Stack>
  )
}

export default Contexts