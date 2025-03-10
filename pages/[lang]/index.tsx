import { useTranslation } from 'next-i18next';
import React from 'react';

import { HeadingLevel, HeadingTypeStyle } from '@/types/typography/Heading';
import { getStaticPaths, makeStaticProps } from '@/utils/getStatic';

import { AnimatedTestimonialsDemo } from '../../components/AnimatedTestimonialsDemo';
import Button from '../../components/buttons/Button';
import GoogleCalendarButton from '../../components/buttons/GoogleCalendarButton';
import ICSFileButton from '../../components/buttons/ICSFileButton';
import SubscribeButton from '../../components/buttons/SubscribeButton';
import Calendar from '../../components/Calendar';
import Head from '../../components/Head';
import Hero from '../../components/Hero';
import Container from '../../components/layout/Container';
import AdidasLogo from '../../components/logos/Adidas';
import AxwayLogo from '../../components/logos/Axway';
import SalesforceLogo from '../../components/logos/Salesforce';
import SapLogo from '../../components/logos/SAP';
import SlackLogo from '../../components/logos/Slack';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import NewsroomSection from '../../components/newsroom/NewsroomSection';
import Slack from '../../components/slack';
import GoldSponsors from '../../components/sponsors/GoldSponsors';
import PlatinumSponsors from '../../components/sponsors/PlatinumSponsors';
import SilverSponsors from '../../components/sponsors/SilverSponsors';
import SupportUs from '../../components/SupportUs/SupportUs';
import Heading from '../../components/typography/Heading';
import Paragraph from '../../components/typography/Paragraph';
import TextLink from '../../components/typography/TextLink';

const getStaticProps = makeStaticProps(['landing-page', 'footer', 'common']);

export { getStaticPaths, getStaticProps };

/* eslint-disable prettier/prettier, jsx-quotes */
/**
 * @description The HomePage is the landing page of the website.
 */
export default function HomePage() {
  const { t } = useTranslation('landing-page');

  return (
    <>
      <Head title="AsyncAPI Initiative for event-driven APIs" />
      <main id="main-content" className="scroll-mt-5">
        <Container wide>
          <Hero className="mb-24" />
        </Container>

        <Container className="pb-12 text-center" wide as="section">
          <Heading
            level={HeadingLevel.h3}
            typeStyle={HeadingTypeStyle.lg}
            className="mb-4"
          >
            {t('adopters.title')}
          </Heading>
          <Paragraph className="mb-20 mt-2 md:mx-auto md:w-2/3">
            {t('adopters.description')}
            <TextLink
              href="https://github.com/asyncapi/website/issues/new"
              target="_blank"
            >
              {t('adopters.linkText')}
            </TextLink>
          </Paragraph>
          <ul className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-5">
            <li className="flex justify-center">
              <AdidasLogo className="h-8 text-gray-400 hover:text-black" />
            </li>
            <li className="flex justify-center">
              <AxwayLogo className="group mt-12 h-14 text-gray-400 hover:text-black md:-mt-5 lg:-mt-5" />
            </li>
            <li className="flex justify-center">
              <SlackLogo className="group mt-12 h-10 text-gray-400 hover:text-black md:mt-2 lg:-mt-1" />
            </li>
            <li className="flex justify-center">
              <SalesforceLogo className="mt-12 h-16 text-gray-400 md:mt-2 lg:-mt-4" />
            </li>
            <li className="flex justify-center">
              <SapLogo className="mt-12 h-12 text-gray-400 md:mt-2 lg:-mt-2" />
            </li>
          </ul>
        </Container>

        <div className="mt-8 bg-dark py-12">
          <Container wide as="section">
            <NewsletterSubscribe dark />
          </Container>
        </div>

        <Container className="py-12 text-center" wide as="section">
          <Heading
            level={HeadingLevel.h3}
            typeStyle={HeadingTypeStyle.lg}
            className="mb-4"
          >
            {t('community.title')}
          </Heading>
          <Paragraph className="mt-2 md:mx-auto md:w-1/2">
            {t('community.subtitle')}
          </Paragraph>
          <div className="py-2 lg:py-12">
            <Container wide>
              <div className="lg:flex">
                <div className="mt-10 lg:mt-0 lg:w-1/2">
                  <Slack />
                </div>
                <section className="lg:ml-12 lg:w-1/2 lg:max-w-xl lg:text-left">
                  <div className="mt-5">
                    <Heading
                      level={HeadingLevel.h4}
                      typeStyle={HeadingTypeStyle.mdSemibold}
                    >
                      {t('community.slackCTATitle')}
                    </Heading>
                    <Paragraph className="mt-2">
                      {t('community.slackCTADesc')}
                    </Paragraph>
                  </div>
                  <div className="mt-5 flex justify-center lg:justify-start">
                    <Button
                      className="w-full md:w-auto"
                      text={t('community.slackCTABtn')}
                      href="/slack-invite"
                    />
                  </div>
                </section>
              </div>

              <div className="mt-12 lg:flex lg:flex-row-reverse">
                <section className="mt-10 lg:mt-0 lg:flex-1">
                  <Calendar size={2} />
                </section>
                <section className="lg:mr-12 lg:max-w-xl lg:text-left">
                  <div className="mt-5 lg:mr-12">
                    <Heading
                      level={HeadingLevel.h3}
                      typeStyle={HeadingTypeStyle.mdSemibold}
                    >
                      {t('community.meetingTitle')}
                    </Heading>
                    <Paragraph className="mt-2">
                      {t('community.meetingDesc')}

                      <TextLink href="/community/meetings">
                        {t('community.meetingLink')}
                      </TextLink>
                    </Paragraph>
                    <ul className="mt-5 justify-center md:flex">
                      <li>
                        <GoogleCalendarButton href="https://calendar.google.com/calendar/u/3?cid=Y19xOXRzZWlnbG9tZHNqNm5qdWh2YnB0czExY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" />
                      </li>
                      <li>
                        <SubscribeButton
                          href="/community/meetings"
                          className="mt-2 md:ml-2 md:mt-0"
                        />
                      </li>
                      <li>
                        <ICSFileButton
                          href="https://calendar.google.com/calendar/ical/c_q9tseiglomdsj6njuhvbpts11c%40group.calendar.google.com/public/basic.ics"
                          className="mt-2 md:ml-2 md:mt-0"
                        />
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </Container>
            <Container wide>
              <NewsroomSection />
            </Container>
          </div>
        </Container>

        <section className="pb-20" role="contentinfo" aria-label="Our Sponsors">
          <Container className="pb-6 text-center" wide as="section">
            <Heading
              level={HeadingLevel.h3}
              typeStyle={HeadingTypeStyle.lg}
              className="mb-4"
            >
              {t('sponsors.platinumTitle')}
            </Heading>
            <PlatinumSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="pb-6 text-center" wide as="section">
            <Heading
              level={HeadingLevel.h3}
              typeStyle={HeadingTypeStyle.lg}
              className="mb-4"
            >
              {t('sponsors.goldTitle')}
            </Heading>
            <GoldSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="pyb-6 text-center" wide as="section">
            <Heading
              level={HeadingLevel.h3}
              typeStyle={HeadingTypeStyle.lg}
              className="mb-4"
            >
              {t('sponsors.silverTitle')}
            </Heading>
            <SilverSponsors className="mt-4" showSupportBanner={false} />
          </Container>

          <Container className="py-6 text-center" wide as="section">
            <Heading
              level={HeadingLevel.h3}
              typeStyle={HeadingTypeStyle.mdSemibold}
              className="mb-4"
            >
              {t('sponsors.sponsorCTATitle')}
            </Heading>
            <Paragraph className="mt-2 md:mx-auto md:w-1/2">
              {t('sponsors.sponsorCTADesc')}
              <TextLink
                href="https://opencollective.com/asyncapi"
                target="_blank"
              >
                {t('sponsors.sponsorCTALink')}
              </TextLink>
            </Paragraph>
          </Container>
        </section>
        <Container className="py-6 pb-20 text-center" wide>
          <Heading
            level={HeadingLevel.h3}
            typeStyle={HeadingTypeStyle.lg}
            className="mb-4"
          >
            {t('sponsors.supportedByTitle')}
          </Heading>
          <Paragraph className="mx-auto mt-3 max-w-2xl pb-4 sm:mt-4">
            {t('sponsors.supportedByPretext')}
            <TextLink href="mailto:info@asyncapi.io" target="_blank">
              {t('sponsors.supportedByLink')}
            </TextLink>{' '}
            {t('sponsors.supportedByPosttext')}
          </Paragraph>
          <SupportUs className="mt-4" showSupportBanner={false} />
        </Container>
        <Container>
          <AnimatedTestimonialsDemo />
        </Container>
      </main>
    </>
  );
}

/**
 * @description This function generates all language slugs for the landing page.
 * @returns {object} The paths object containing all language slugs.
 */
