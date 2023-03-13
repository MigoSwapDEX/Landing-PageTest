import Trans from 'components/Trans'
import styled from 'styled-components'
import { Link } from '@pancakeswap/uikit'

const InlineLink = styled(Link)`
  display: inline;
`

const config = [
  {
    title: <Trans>Why use MIGO Now</Trans>,
    description: [
      <Trans>
        MIGO will be used as IFO currency for Shadowswap as we have uphold some mecahnism to prevent the negative side
        of using MIGO. More Info Later.
      </Trans>,
      <Trans>NOTE: The Use of $MIGO is susceptible to change</Trans>,
    ],
  },
  {
    title: <Trans>What’s the difference between a Public Sale and Private Sale?</Trans>,
    description: [
      <Trans>
        In this IFO format. In Private Sale users have to be on Whitelist toparticipate, Each eligible participant will
        be able to commit up to a certain amount of MIGO.
      </Trans>,
      <Trans>In the Public Sale, everyone with MIGO can Stake in the public Pool.</Trans>,
    ],
  },
  {
    title: <Trans>Which sale should I commit to? Can I do both?</Trans>,
    description: [
      <Trans>There’s only a participation fee for the Public Sale: there’s no fee for the Private Sale.</Trans>,
      <Trans>
        The participation fee decreases in cliffs, based on the percentage of overflow from the “Public Sale” portion of
        the IFO.
      </Trans>,
      <Trans>
        Note: Fees may vary between different IFOs. To learn more about the participation fees, please refer to the
        details in the IFO proposal (vote) for the specifics of the IFO you want to take part in.
      </Trans>,
    ],
  },
  {
    title: <Trans>What can i do with my tokens after IFO?</Trans>,
    description: [
      <Trans>Trading, Farming and More...</Trans>,
      <Trans>Farming, Pool Staking will be avaliable for ifo tokens.</Trans>,
    ],
  },
]
export default config
