<template>
  <main class="flex flex-1 justify-center">
    <div class="flex w-full max-w-[1280px] flex-col md:flex-row">
      <!-- Sidebar Navigation -->
      <LegalSidebar
        :title="$t('legal.sidebar.title')"
        :version="$t('legal.sidebar.version')"
        :nav-items="navItems"
        active-item="terms"
        :show-progress="true"
      />
      
      <!-- Document Content Area -->
      <article class="flex-1 bg-white dark:bg-background-dark p-6 md:p-16 lg:px-24">
        <div class="max-w-[800px] pt-10 mx-auto">
          <!-- Header -->
          <LegalHeader
            :badge="$t('terms.header.badge')"
            :title="$t('terms.header.title')"
            :description="$t('terms.header.description')"
          />
          
          <!-- Content Sections -->
          <div class="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
            <!-- Acceptance of Terms -->
            <LegalSection
              section-id="acceptance"
              number="01"
              :title="$t('terms.sections.acceptance.title')"
            >
              <p class="mb-4">{{ $t('terms.sections.acceptance.content') }}</p>
              <ul class="space-y-3 ml-2">
                <LegalListItem
                  icon="mdi:check-circle"
                  icon-class="text-primary"
                  title=""
                  :description="$t('terms.sections.acceptance.items.agreement')"
                />
                <LegalListItem
                  icon="mdi:check-circle"
                  icon-class="text-primary"
                  title=""
                  :description="$t('terms.sections.acceptance.items.updates')"
                />
              </ul>
            </LegalSection>
            
            <!-- Description of Service -->
            <LegalSection
              section-id="description"
              number="02"
              :title="$t('terms.sections.description.title')"
            >
              <p class="mb-4">{{ $t('terms.sections.description.intro') }}</p>
              <div class="grid gap-4 md:grid-cols-2 mt-6">
                <PermissionCard
                  icon="mdi:timer"
                  :title="$t('terms.sections.description.features.autoClosing.title')"
                  :description="$t('terms.sections.description.features.autoClosing.description')"
                />
                <PermissionCard
                  icon="mdi:shield-check"
                  :title="$t('terms.sections.description.features.whitelisting.title')"
                  :description="$t('terms.sections.description.features.whitelisting.description')"
                />
              </div>
            </LegalSection>
            
            <!-- User Conduct -->
            <LegalSection
              section-id="conduct"
              number="03"
              :title="$t('terms.sections.conduct.title')"
            >
              <p class="mb-4">{{ $t('terms.sections.conduct.intro') }}</p>
              <ul class="space-y-4 ml-2">
                <LegalListItem
                  icon="mdi:alert-circle"
                  icon-class="text-primary"
                  :title="$t('terms.sections.conduct.items.malicious.title')"
                  :description="$t('terms.sections.conduct.items.malicious.description')"
                />
                <LegalListItem
                  icon="mdi:alert-circle"
                  icon-class="text-primary"
                  :title="$t('terms.sections.conduct.items.reverseEngineering.title')"
                  :description="$t('terms.sections.conduct.items.reverseEngineering.description')"
                />
              </ul>
            </LegalSection>
            
            <!-- Intellectual Property -->
            <LegalSection
              section-id="intellectual-property"
              number="04"
              :title="$t('terms.sections.intellectualProperty.title')"
            >
              <p>{{ $t('terms.sections.intellectualProperty.content') }}</p>
            </LegalSection>
            
            <!-- Contact Section -->
            <LegalContactSection
              section-id="contact"
              :title="$t('terms.contact.title')"
              :description="$t('terms.contact.description')"
              :primary-label="$t('terms.contact.primaryButton')"
              :secondary-label="$t('terms.contact.secondaryButton')"
            />
          </div>
          
          <!-- Footer Links -->
          <LegalFooter />
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()

interface NavItem {
  id: string
  label: string
  icon: string
  to: string
}

const navItems = computed<NavItem[]>(() => [
  {
    id: 'terms',
    label: t('legal.sidebar.nav.terms'),
    icon: 'mdi:file-document-outline',
    to: '/terms'
  },
  {
    id: 'privacy',
    label: t('legal.sidebar.nav.privacy'),
    icon: 'mdi:shield-check',
    to: '/privacy'
  }
])
</script>
