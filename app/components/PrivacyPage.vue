<template>
  <main class="flex flex-1 justify-center">
    <div class="flex w-full max-w-[1280px] flex-col md:flex-row">
      <!-- Sidebar Navigation -->
      <LegalSidebar
        :title="$t('legal.sidebar.title')"
        :version="$t('legal.sidebar.version')"
        :nav-items="navItems"
        active-item="privacy"
        :show-progress="true"
      />

      <!-- Document Content Area -->
      <article class="flex-1 bg-white dark:bg-background-dark p-6 md:p-16 lg:px-24">
        <div class="max-w-[800px] pt-10 mx-auto">
          <!-- Header -->
          <LegalHeader
            :badge="$t('privacy.header.badge')"
            :title="$t('privacy.header.title')"
            :description="$t('privacy.header.description')"
          />

          <!-- Content Sections -->
          <div class="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
            <!-- Introduction -->
            <LegalSection
              section-id="introduction"
              number="01"
              :title="$t('privacy.sections.introduction.title')"
            >
              <p>{{ $t('privacy.sections.introduction.content') }}</p>
            </LegalSection>

            <!-- Data Collection -->
            <LegalSection
              section-id="data-collection"
              number="02"
              :title="$t('privacy.sections.dataCollection.title')"
            >
              <p class="mb-4">{{ $t('privacy.sections.dataCollection.intro') }}</p>
              <ul class="space-y-4 ml-2">
                <LegalListItem
                  icon="mdi:check-circle"
                  icon-class="text-primary"
                  :title="$t('privacy.sections.dataCollection.items.config.title')"
                  :description="$t('privacy.sections.dataCollection.items.config.description')"
                />
                <LegalListItem
                  icon="mdi:check-circle"
                  icon-class="text-primary"
                  :title="$t('privacy.sections.dataCollection.items.telemetry.title')"
                  :description="$t('privacy.sections.dataCollection.items.telemetry.description')"
                />
                <LegalListItem
                  icon="mdi:cancel"
                  icon-class="text-slate-400"
                  :title="$t('privacy.sections.dataCollection.items.history.title')"
                  :description="$t('privacy.sections.dataCollection.items.history.description')"
                  :disabled="true"
                />
              </ul>
            </LegalSection>

            <!-- Browser Permissions -->
            <LegalSection
              section-id="permissions"
              number="03"
              :title="$t('privacy.sections.permissions.title')"
            >
              <p class="mb-6">{{ $t('privacy.sections.permissions.intro') }}</p>
              <div class="grid gap-4 md:grid-cols-2">
                <LegalPermissionCard
                  icon="mdi:tab"
                  :title="$t('privacy.sections.permissions.cards.tabs.title')"
                  :description="$t('privacy.sections.permissions.cards.tabs.description')"
                />
                <LegalPermissionCard
                  icon="mdi:database"
                  :title="$t('privacy.sections.permissions.cards.storage.title')"
                  :description="$t('privacy.sections.permissions.cards.storage.description')"
                />
              </div>
            </LegalSection>
            <!-- Data Security -->
            <LegalSection
              section-id="security"
              number="04"
              :title="$t('privacy.sections.security.title')"
            >
              <p>{{ $t('privacy.sections.security.content') }}</p>
            </LegalSection>

            <!-- Contact Section -->
            <LegalContactSection
              section-id="contact"
              :title="$t('privacy.contact.title')"
              :description="$t('privacy.contact.description')"
              :primary-label="$t('privacy.contact.primaryButton')"
              :secondary-label="$t('privacy.contact.secondaryButton')"
            />
          </div>

          <!-- Footer Links -->
          <LegalFooter />
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
  import { computed } from 'vue';

  const { t } = useI18n();

  const navItems = computed(() => [
    {
      id: 'terms',
      label: t('legal.sidebar.nav.terms'),
      icon: 'mdi:file-document-outline',
      to: '/terms',
    },
    {
      id: 'privacy',
      label: t('legal.sidebar.nav.privacy'),
      icon: 'mdi:shield-check',
      to: '/privacy',
    },
  ]);
</script>
