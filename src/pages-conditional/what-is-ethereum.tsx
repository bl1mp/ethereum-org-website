import React from "react"
import styled, { useTheme } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, PageProps } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import Translation from "../components/Translation"
import Callout from "../components/Callout"
import Card from "../components/Card"
import OriginalButtonLink from "../components/ButtonLink"
import PageMetadata from "../components/PageMetadata"
import Tabs from "../components/Tabs"
import Icon from "../components/Icon"
import Link from "../components/Link"
import {
  CardContainer,
  Content,
  GrayContainer,
  Page,
  Width60,
  Width40,
} from "../components/SharedStyledComponents"
import {
  Banner,
  BannerBody,
  BannerGrid,
  BannerGridCell,
  BannerImage,
} from "../components/BannerGrid"
import AdoptionChart from "../components/AdoptionChart"
import EnergyConsumptionChart from "../components/EnergyConsumptionChart"
import Slider, { EmblaSlide } from "../components/Slider"
import FeedbackCard from "../components/FeedbackCard"

import { translateMessageId } from "../utils/translations"

import { Context } from "../types"

const Slogan = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 140%;
`

const Title = styled.h1`
  font-size: 0.875rem;
  line-height: 140%;
  letter-spacing: 0.04em;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTableOfContents};
`

const Subtitle = styled.div`
  font-size: 1.25rem;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.text200};
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const Hero = styled(GatsbyImage)`
  flex: 1 1 100%;
  max-width: 800px;
  background-size: cover;
  background-repeat: no-repeat;
`

const Header = styled.header`
  margin-top: 12rem;
  @media (max-width: 1280px) {
    margin-top: 8rem;
  }
  @media (max-width: 1160px) {
    margin-top: 7rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-top: 4rem;
  }
  @media (max-width: 920px) {
    margin-top: 2rem;
  }
  @media (max-width: 870px) {
    margin-top: 1rem;
  }
  @media (max-width: 840px) {
    margin-top: 0;
  }
`

const StyledGrayContainer = styled(GrayContainer)`
  padding: 0;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: 0rem;
    box-shadow: none;
  }
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const Summary = styled.div`
  padding: 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.cardGradient};
`

const TwoColumnContent = styled.div<{ reverse?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;

    & > *:first-child {
      margin-bottom: 2rem;
    }
  }
`

const Section = styled.div<{
  bgColor?: string
}>`
  padding: 3rem 2rem;
  background-color: ${({ bgColor = "transparent" }) => bgColor};

  h2 {
    margin-top: 0;
  }
`

const Column = styled.div`
  flex: 0 0 50%;
  max-width: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: 100%;
  }
  margin-bottom: 1.5rem;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 416px;
  min-height: 100%;
`

const TabContent = styled.p`
  margin: 0;
`

const StatPrimary = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1;
`

const StatDescription = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text200};
  max-width: 200px;
`

const ButtonLink = styled(OriginalButtonLink)``

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  & ${ButtonLink} {
    margin-right: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
      margin-bottom: 1rem;
    }
  }
`

const WhatIsEthereumPage = ({
  data,
}: PageProps<Queries.WhatIsEthereumQuery, Context>) => {
  const intl = useIntl()
  const theme = useTheme()

  const cards = [
    {
      emoji: ":bank:",
      title: translateMessageId("page-what-is-ethereum-banking-card", intl),
      description: translateMessageId(
        "page-what-is-ethereum-banking-card-desc",
        intl
      ),
    },

    {
      emoji: ":detective:",
      title: translateMessageId("page-what-is-ethereum-internet-card", intl),
      description: translateMessageId(
        "page-what-is-ethereum-internet-card-desc",
        intl
      ),
    },
    {
      emoji: ":busts_in_silhouette:",
      title: translateMessageId("page-what-is-ethereum-p2p-card", intl),
      description: translateMessageId(
        "page-what-is-ethereum-p2p-card-desc",
        intl
      ),
    },
    {
      emoji: ":shield:",
      title: translateMessageId("page-what-is-ethereum-censorless-card", intl),
      description: translateMessageId(
        "page-what-is-ethereum-censorless-card-desc",
        intl
      ),
    },
    {
      emoji: ":shopping_bags:",
      title: translateMessageId("page-what-is-ethereum-commerce-card", intl),
      description:
        "Customers have a secure, built-in guarantee that funds will only change hands if you provide what was agreed. Likewise, developers can have certainty that the rules won't change on them.",
    },
    {
      emoji: ":handshake:",
      title: "All products are composable",
      description:
        "Since all apps are built on the same blockchain / share the same state, they can build off each other (similar to legos). This allows for better products and experiences being built all the time.",
    },
  ]

  const energyConsumptionChartData = [
    {
      name: "Youtube",
      amount: 244,
      color: "#FF0000",
    },
    {
      name: "Gold mining",
      amount: 240,
      color: "#D7B14A",
    },
    {
      name: "BTC PoW",
      amount: 200,
      color: "#F2A900",
    },
    {
      name: "ETH PoW",
      amount: 112,
      color: "#C1B6F5",
    },
    {
      name: "Netflix",
      amount: 94,
      color: "#E50914",
    },
    {
      name: "Gaming",
      amount: 34,
      color: "#71BB8A",
    },
    {
      name: "Paypal",
      amount: 0.26,
      color: "#C1B6F5",
    },
    {
      name: "ETH PoS",
      amount: 0.01,
      color: "#C1B6F5",
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-what-is-ethereum-meta-title", intl)}
        description={translateMessageId(
          "page-what-is-ethereum-meta-description",
          intl
        )}
        image={getImage(data.ogImage)?.images.fallback.src}
      />
      <Content>
        <HeroContainer>
          <Header>
            <Title>
              <Translation id="page-what-is-ethereum-title" />
            </Title>
            <Slogan>
              <Translation id="page-what-is-ethereum-desc" />
            </Slogan>
            <Subtitle>
              Learn more about how Ethereum works, the benefits it brings and
              how it is being used by millions of people around the world. A
              complete beginner's guide.
            </Subtitle>
            <ButtonRow>
              <ButtonLink toId="summary">Let’s start</ButtonLink>
            </ButtonRow>
          </Header>
          <Hero
            image={getImage(data.hero)}
            alt={translateMessageId(
              "page-what-is-ethereum-alt-img-bazaar",
              intl
            )}
            loading="eager"
          />
        </HeroContainer>
      </Content>
      <StyledGrayContainer>
        <Section>
          <TwoColumnContent id="summary">
            <Width60>
              <Summary>
                <p>
                  <b>Summary</b>
                </p>
                <p>
                  Ethereum is a technology that lets you send cryptocurrency to
                  anyone for a small fee. Its also a marketplace of apps that
                  anyone can use and no one can take down. Ethereum doesn’t
                  require any central authority to maintain and secure it.
                  Instead, individuals can make peer-to-peer transactions
                  without needing to trust a third party or one another.
                </p>
                <p>Still confused? Let's explain everything step by step.</p>
              </Summary>
            </Width60>
            <Width40 />
          </TwoColumnContent>
          <TwoColumnContent reverse>
            <Width40>
              <GatsbyImage image={getImage(data.wallet)} />
            </Width40>
            <Width60>
              <h2>What is a cryptocurrency?</h2>
              <p>
                <b>
                  Crypto (short for cryptocurrency) is a new form of digital
                  money powered by cryptography.
                </b>
              </p>
              <p>
                It alll started in 2008 with Bitcoin. You could use it to send
                funds to anyone anywhere globally. What made crypto different
                from normal bank transfers or other services like Paypal is that
                there was no middle man for the first time.
              </p>
              <p>Wait, what is a middle man?</p>
              <p>
                Traditionally, banks hold your money for you. They review and
                process every transaction you request and can decline it. Since
                banks store the funds, they have a lot of control over it. They
                can dictate which financial services you have access to and
                which not.
              </p>
              <p>
                Things are different with crypto. You act as{" "}
                <b>your own bank</b>. Nobody else has access to your funds. You
                and your friends can make direct{" "}
                <b>peer-to-peer transactions</b> with no single authority
                controling the transfer. This is possible because of the
                blockchain technology upon which cryptocurrencies operate.
              </p>
            </Width60>
          </TwoColumnContent>
          <TwoColumnContent>
            <Width60>
              <Tabs
                tabs={[
                  {
                    title: "What is a blockchain?",
                    content: (
                      <TabContent>
                        <b>A blockchain is a database of transactions</b> that
                        is updated and shared across many computers in a
                        network. Every time a new set of transactions is added,
                        its called a “block” - hence the name blockchain. Most
                        blockchains are public, and you can only add data, not
                        remove. If someone wanted to alter any of the
                        information or cheat the system, they’d need to do so on
                        the majority of computers on the network. That is a lot!
                        This makes established blockchains highly secure.
                      </TabContent>
                    ),
                  },
                  {
                    title: "Why is it called cryptocurrency?",
                    content: (
                      <TabContent>
                        Blockchain uses cryptographic techniques to ensure that
                        your funds are safe. Similar techniques have been used
                        in the banking industries to ensure the security of
                        monetary transactions for years. So you could say
                        cryptocurencies have a bank level of security.
                      </TabContent>
                    ),
                  },
                ]}
              />
            </Width60>
            <Width40 />
          </TwoColumnContent>
        </Section>

        <Section>
          <TwoColumnContent>
            <Width40>
              <GatsbyImage image={getImage(data.eth)} />
            </Width40>
            <Width60>
              <h2>What is the difference between Ethereum and Bitcoin?</h2>
              <p>
                Launched in 2015, Ethereum builds on Bitcoin's innovation, with
                some big differences.
              </p>
              <p>
                Both let you use digital money without payment providers or
                banks. But <b>Ethereum is programmable</b>, so you can also use
                it to create any type of application on top of it.
              </p>
              <p>
                Ethereum being programmable means that you can build apps that
                use the blockchain to store data or control what your app can
                do. This results in a general purpose blockchain that can be
                programmed to do anything. As there is no limit to what Ethereum
                can do, it allows for great innovation to happen on the Ethereum
                network.
              </p>
              <p>
                While Bitcoin is only a payment network, Ethereum is more like a
                marketplace of financial services, games, social networks and
                other apps that respect your privacy and cannot censor you.
              </p>
            </Width60>
          </TwoColumnContent>
        </Section>

        <Section>
          <h2>What Ethereum can do?</h2>
          <CardContainer>
            {cards.map((card, idx) => (
              <StyledCard
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
        </Section>

        <Section>
          <Banner>
            <BannerBody>
              <h2>Ethereum in numbers</h2>
              <BannerGrid>
                <BannerGridCell>
                  <StatPrimary>2970</StatPrimary>
                  <StatDescription>
                    Projects built on Ethereum{" "}
                    <Link
                      to="https://www.stateofthedapps.com/stats/platform/ethereum#new"
                      hideArrow
                      ariaLabel="Read more about Ethereum projects stats"
                    >
                      <Icon name="info" size="1rem" />
                    </Link>
                  </StatDescription>
                </BannerGridCell>
                <BannerGridCell>
                  <StatPrimary>71M+</StatPrimary>
                  <StatDescription>
                    Accounts (wallets) with an ETH balance{" "}
                    <Link
                      to="https://bitcoinist.com/ethereum-reaches-new-milestone-as-over-71-million-wallets-hold-eth/"
                      hideArrow
                      ariaLabel="Read more about wallets stats"
                    >
                      <Icon name="info" size="1rem" />
                    </Link>
                  </StatDescription>
                </BannerGridCell>
                <BannerGridCell>
                  <StatPrimary>50.5M</StatPrimary>
                  <StatDescription>
                    Smart contracts on Ethereum{" "}
                    <Link
                      to="https://www.TODO.com"
                      hideArrow
                      ariaLabel="Read more about smart contracts stats"
                    >
                      <Icon name="info" size="1rem" />
                    </Link>
                  </StatDescription>
                </BannerGridCell>
                <BannerGridCell>
                  <StatPrimary>$11.6T</StatPrimary>
                  <StatDescription>
                    Value moved through the Ethereum network in 2021{" "}
                    <Link
                      to="https://stark.mirror.xyz/q3OnsK7mvfGtTQ72nfoxLyEV5lfYOqUfJIoKBx7BG1I"
                      hideArrow
                      ariaLabel="Read more about 2021 Ethereum network stats"
                    >
                      <Icon name="info" size="1rem" />
                    </Link>
                  </StatDescription>
                </BannerGridCell>
                <BannerGridCell>
                  <StatPrimary>$3.5B</StatPrimary>
                  <StatDescription>
                    Creator earnings on Ethereum in 2021{" "}
                    <Link
                      to="https://stark.mirror.xyz/q3OnsK7mvfGtTQ72nfoxLyEV5lfYOqUfJIoKBx7BG1I"
                      hideArrow
                      ariaLabel="Read more about 2021 Ethereum earnings stats"
                    >
                      <Icon name="info" size="1rem" />
                    </Link>
                  </StatDescription>
                </BannerGridCell>
                <BannerGridCell>
                  <StatPrimary>1.1M</StatPrimary>
                  <StatDescription>
                    Number of transactions today{" "}
                    <Link
                      to="https://www.TODO.com"
                      hideArrow
                      ariaLabel="Read more about number of transactions stats"
                    >
                      <Icon name="info" size="1rem" />
                    </Link>
                  </StatDescription>
                </BannerGridCell>
              </BannerGrid>
            </BannerBody>
            <BannerImage>
              <GatsbyImage image={getImage(data.newrings)} />
            </BannerImage>
          </Banner>
        </Section>

        <Section>
          <TwoColumnContent>
            <Width60>
              <h2>Why would I use Ethereum?</h2>
              <p>
                If you’ve ever sent money overseas (or plan to), or had to worry
                about the future of your assets due to external forces outside
                of your control where you live, or been fed up by the numerous
                restrictions and fees imposed by traditional financial
                institutions for everyday transactions, you might be interested
                in what cryptocurrencies have to offer.
              </p>
              <p>
                Bear in mind that Ethereum is a story that is still being
                written, and many more reasons to use it are being uncovered as
                it evolves and develops over time.
              </p>
              <p>
                <b>Stablecoins</b> are a novel type of cryptocurrency that
                relies on a more stable asset as the basis for its value. Most
                of them are linked to the United States dollar and therefore
                maintain the value of that currency. These allow for a very
                cheap and stable global payment system. Many current stablecoins
                are built on the Ethereum network.
              </p>
              <Slider>
                <EmblaSlide>
                  <h3>Cheaper and Faster Crossborder Payments</h3>
                  <p>
                    Stablecoins also simplify the process of sending money
                    overseas. It often takes only few minutes to move funds
                    across the globe, as opposed to the several business days or
                    even weeks that it may take your average bank, and for a
                    fraction of the price. Additionally, there is no extra fee
                    for making a high value transaction, and there are zero
                    restrictions on where or why you are sending your money.
                  </p>
                </EmblaSlide>
                <EmblaSlide>
                  <h3>The Quickest Help in Times of Crisis</h3>
                  <p>
                    If you are lucky enough to have multiple banking options
                    through trusted institutions where you live, you may take
                    for granted the financial freedom, security and stability
                    that they offer. But for many people around the world facing
                    political repression or economic hardship, financial
                    institutions may not provide the protection or services they
                    need.
                  </p>
                  <p>
                    When war, economic catastrophes or crackdowns on civil
                    liberties struck the residents of Venezuela, Cuba,
                    Afghanistan, Nigeria, Belarus, and Ukraine, cryptocurrencies
                    constituted the quickest and often the only option to retain
                    financial agency.1 As seen in these examples,
                    cryptocurrencies like Ethereum can provide unfettered access
                    to the global economy when people are cut off from the
                    outside world. Additionally, stablecoins offer a store of
                    value when local currencies are collapsing due to
                    superinflation.
                  </p>
                </EmblaSlide>
                <EmblaSlide>
                  <h3>Empowering Creators</h3>
                  <p>
                    In 2021 alone, artists, musicians, writers, and other
                    creators used Ethereum to earn around $3.5 billion
                    collectively. This makes Ethereum one of the largest global
                    platforms for creators, alongside Spotify, YouTube, and
                    Etsy. Learn more
                  </p>
                </EmblaSlide>
                <EmblaSlide>
                  <h3>Empowering Gamers</h3>
                  <p>
                    Play to earn games (where players are actually rewarded for
                    playing the games) have recently emerged and are
                    transforming the gaming industry. Traditionally, it is often
                    prohibited to trade or transfer in-game assets to other
                    players for real money. This forces players to use black
                    market websites that are often a security risk. Blockchain
                    gaming embraces the ingame economy and promotes such
                    behavior in a trusted manner.
                  </p>
                  <p>
                    Moreover, players are incentivized by being able to trade
                    in-game tokens for real money and thus being trully rewarded
                    for their play time.
                  </p>
                </EmblaSlide>
              </Slider>
            </Width60>
            <Width40>
              <AdoptionChart />
            </Width40>
          </TwoColumnContent>
        </Section>

        <Section bgColor={theme.colors.homeBoxTurquoise}>
          <TwoColumnContent>
            <Width40>
              <GatsbyImage image={getImage(data.eth2)} />
            </Width40>
            <Width60>
              <h2>What can I do with ETH coin?</h2>
              <p>
                Turns out: a lot of things! One of the most prominent usages of
                the Ethereum technology is decentralised finance (DeFi) that
                opens whole area of banking services to anybody with an internet
                connection. You can use your Ether as a collateral to take out
                loans or provide liquidity to earn interest on your funds.
              </p>
              <p>
                Every action on the Ethereum network requires a certain amount
                of computational power. This is paid in the form of Ether fee.
                This means you need at least small amount of ETH to use the
                network.
              </p>
              <p>
                <ButtonRow>
                  <ButtonLink to="/dapps/">Explore applications</ButtonLink>
                  <ButtonLink to="/defi/" isSecondary>
                    Learn about DeFi
                  </ButtonLink>
                </ButtonRow>
              </p>
            </Width60>
          </TwoColumnContent>
        </Section>

        <Section>
          <TwoColumnContent reverse>
            <Width40>
              <GatsbyImage image={getImage(data.merge)} />
            </Width40>
            <Width60>
              <h2>Meet Ether, Ethereum’s cryptocurrency</h2>
              <p>
                Ethereum has a native cryptocurrency called Ether (ETH). It is
                purely digital, and you can send it to anyone anywhere in the
                world instantly. The supply of ETH isn’t controlled by any
                government or company - it is decentralized. New coins (also
                commonly called tokens) are created only by miners and stakers
                who maintain the network.
              </p>
              <p>
                <ButtonRow>
                  <ButtonLink to="/eth/">What is Ether?</ButtonLink>
                  <ButtonLink to="/get-eth/" isSecondary>
                    Get ETH
                  </ButtonLink>
                </ButtonRow>
              </p>
            </Width60>
          </TwoColumnContent>
        </Section>

        <Section bgColor={theme.colors.homeBoxPurple}>
          <TwoColumnContent>
            <Width40>
              <GatsbyImage image={getImage(data.ethInside)} />
            </Width40>
            <Width60>
              <h2>Who runs Ethereum?</h2>
              <p>
                Ethereum is not controlled by any one entity. It exists solely
                through the decentralised participation and cooperation of the
                community. Ethereum makes use of nodes (a computer with a copy
                of the Ethereum blockchain data) run by volunteers to replace
                individual server and cloud systems owned by major internet
                providers and services.
              </p>
              <p>
                These distributed nodes, run by individuals and businesses all
                over the world, provide resiliency to the Ethereum network
                infrastructure. It is therefore much less vulnerable to hacks or
                shutdowns.{" "}
                <b>
                  Since its launch in 2015, Ethereum has never suffered downtime
                </b>
                . There are currently over 1777 individual nodes running
                Ethereum network. This makes Ethereum one of the most
                decentralized cryptocurrencies out there, second only to
                bitcoin.
              </p>
              <p>
                <ButtonRow>
                  <ButtonLink to="/run-a-node/">Run a node</ButtonLink>
                </ButtonRow>
              </p>
            </Width60>
          </TwoColumnContent>
        </Section>

        <Section>
          <TwoColumnContent reverse>
            <Width40>
              <GatsbyImage image={getImage(data.infra)} />
            </Width40>
            <Width60>
              <h2>What are smart contracts?</h2>
              <p>
                <b>Smart contracts are simply computer programs</b> living on
                the Ethereum blockchain. They only{" "}
                <b>
                  execute when triggered by a transaction from a user (or
                  another contract)
                </b>
                . They make Ethereum very flexible in what it can do and
                distinguish it from other cryptocurrencies. These programs are
                what we now call decentralized apps, or dapps.
              </p>
              <p>
                Have you ever used a product that changed its terms of service?
                Or removed a feature you found useful? Once a smart contract is
                published to Ethereum, it will be online and operational for as
                long as Ethereum exists. Not even the author can take it down.
                Since smart contracts are automated, they do not discriminate
                against any user and are always ready to use.
              </p>
              <p>
                Popular examples of smart contracts are lending apps,
                decentralized trading exchanges, insurance, crowdfunding apps -
                basically anything you can think of.
              </p>
              <p>
                <ButtonRow>
                  <ButtonLink to="/smart-contracts/">
                    More on Smart contracts
                  </ButtonLink>
                  <ButtonLink to="/dapps/" isSecondary>
                    Explore dapps
                  </ButtonLink>
                </ButtonRow>
              </p>
            </Width60>
          </TwoColumnContent>
        </Section>
      </StyledGrayContainer>

      <Section>
        <TwoColumnContent>
          <Width40>
            <GatsbyImage image={getImage(data.finance)} />
          </Width40>
          <Width60>
            <h2>
              I heard crypto is being used as a tool for criminal activity. Is
              this true?
            </h2>
            <p>
              Like any form of money, some of it will be misused. However,
              because all Ethereum transactions happen on an open blockchain,
              it’s often easier for authorities to track illicit activity than
              it would be in the traditional financial system, arguably making
              Ethereum a less appealing choice for those who would rather go
              undetected.
            </p>
            <p>
              Crypto is used much less than fiat currencies for criminal
              purposes according to the key findings of a recent report by
              Europol, the European Union Agency for Law Enforcement
              Cooperation:
            </p>
            <p>
              <em>
                “The use of cryptocurrencies for illicit activities seems to
                comprise only a small part of the overall cryptocurrency
                economy, and it appears to be comparatively smaller than the
                amount of illicit funds involved in traditional finance.”
              </em>
            </p>
            <p>
              <ul>
                <li>
                  <Link to="https://www.europol.europa.eu/publications-events/publications/cryptocurrencies-tracing-evolution-of-criminal-finances#downloads">
                    Europol Spotlight - Cryptocurrencies - Tracing the evolution
                    of criminal finances.pdf
                  </Link>{" "}
                  EN (1.4 MB)
                </li>
                <li>
                  <Link to="https://go.chainalysis.com/2021-CryptoCrime-Report.html">
                    Chainalysis (2021), The 2021 Crypto Crime report
                  </Link>{" "}
                  EN
                </li>
              </ul>
            </p>
          </Width60>
        </TwoColumnContent>
      </Section>

      <Section>
        <TwoColumnContent reverse>
          <Width40>
            <EnergyConsumptionChart
              data={energyConsumptionChartData}
              legend="Annual Energy Consumption in TW/yr"
            />
          </Width40>
          <Width60>
            <h2>What about Ethereum’s energy consumption?</h2>
            <p>
              Ethereum is currently using proof-of-work mechanism that consumes
              a large amount of energy. In the coming months (Q3/Q4 2022)
              Ethereum will undergo its biggest update yet and will switch to
              proof of stake mechanism which will{" "}
              <b>greatly reduce the enviromental impact</b> it has.
            </p>
            <p>
              This update will reduce the energy required to secure Ethereum by
              about <b>99.95%</b>, creating a{" "}
              <b>safer network for a much smaller carbon cost</b>. This will
              make Ethereum a truly low-carbon blockchain while boosting its
              security and scalability.
            </p>
            <p>
              <ButtonRow>
                <ButtonLink to="/energy-consumption/">
                  More on energy consumption
                </ButtonLink>
                <ButtonLink to="/upgrades/merge/" isSecondary>
                  The Merge update
                </ButtonLink>
              </ButtonRow>
            </p>
          </Width60>
        </TwoColumnContent>
      </Section>

      <Content>
        <h2>Additional readings</h2>
        <p>
          <Link to="https://weekinethereumnews.com/">
            Week in Ethereum News
          </Link>{" "}
          - A weekly newsletter covering key developments across the ecosystem.
        </p>
        <p>
          <Link to="https://stark.mirror.xyz/q3OnsK7mvfGtTQ72nfoxLyEV5lfYOqUfJIoKBx7BG1I">
            The Year in Ethereum 2021
          </Link>{" "}
          Jan 17, 2022 - Josh Stark and Evan Van Ness
        </p>
        <p>
          <Link to="https://stark.mirror.xyz/n2UpRqwdf7yjuiPKVICPpGoUNeDhlWxGqjulrlpyYi0">
            Atoms, Institutions, Blockchains
          </Link>{" "}
          - Why blockchains matter?
        </p>
      </Content>

      <Content>
        <Column>
          <h2>
            <Translation id="page-what-is-ethereum-explore" />
          </h2>
        </Column>
        <CardContainer>
          <StyledCallout
            image={getImage(data.developers)}
            titleKey="page-what-is-ethereum-build"
            alt={translateMessageId("page-what-is-ethereum-alt-img-lego", intl)}
            descriptionKey="page-what-is-ethereum-build-desc"
          >
            <div>
              <ButtonLink to="/developers/">
                <Translation id="page-what-is-ethereum-start-building-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
          <StyledCallout
            image={getImage(data.community)}
            titleKey="page-what-is-ethereum-community"
            alt={translateMessageId("page-what-is-ethereum-alt-img-comm", intl)}
            descriptionKey="page-what-is-ethereum-comm-desc"
          >
            <div>
              <ButtonLink to="/community/">
                <Translation id="page-what-is-ethereum-meet-comm" />
              </ButtonLink>
            </div>
          </StyledCallout>
        </CardContainer>
      </Content>
      <Content>
        <FeedbackCard />
      </Content>
    </Page>
  )
}

export default WhatIsEthereumPage

export const useCaseImage = graphql`
  fragment useCaseImage on File {
    childImageSharp {
      gatsbyImageData(
        height: 260
        layout: FIXED
        placeholder: BLURRED
        quality: 100
      )
    }
  }
`
export const actionCardImage = graphql`
  fragment actionCardImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 368
        layout: FIXED
        placeholder: BLURRED
        quality: 100
      )
    }
  }
`
export const calloutImage = graphql`
  fragment calloutImage on File {
    childImageSharp {
      gatsbyImageData(
        height: 200
        layout: FIXED
        placeholder: BLURRED
        quality: 100
      )
    }
  }
`

export const query = graphql`
  query WhatIsEthereum {
    hero: file(relativePath: { eq: "what-is-ethereum.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    ogImage: file(relativePath: { eq: "what-is-ethereum.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    banner: file(relativePath: { eq: "home/hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    wallet: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    eth: file(relativePath: { eq: "eth.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 470
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    newrings: file(relativePath: { eq: "upgrades/newrings.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 433
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    chart1: file(relativePath: { eq: "what-is-eth/chart1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 361
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    eth2: file(relativePath: { eq: "what-is-eth/eth.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 243
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    merge: file(relativePath: { eq: "upgrades/merge.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 485
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    ethInside: file(relativePath: { eq: "run-a-node/ethereum-inside.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    infra: file(relativePath: { eq: "infrastructure_transparent.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 437
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    finance: file(relativePath: { eq: "finance_transparent.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 370
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    dapps: file(relativePath: { eq: "doge-computer.png" }) {
      ...actionCardImage
    }
    wallets: file(relativePath: { eq: "wallet-cropped.png" }) {
      ...actionCardImage
    }
    dao: file(relativePath: { eq: "use-cases/dao-2.png" }) {
      ...useCaseImage
    }
    defi: file(relativePath: { eq: "finance_transparent.png" }) {
      ...useCaseImage
    }
    nft: file(relativePath: { eq: "infrastructure_transparent.png" }) {
      ...useCaseImage
    }
    developers: file(relativePath: { eq: "developers-eth-blocks.png" }) {
      ...calloutImage
    }
    community: file(relativePath: { eq: "enterprise.png" }) {
      ...calloutImage
    }
  }
`
