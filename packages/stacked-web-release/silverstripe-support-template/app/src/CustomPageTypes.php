<?php

namespace {
    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Model\List\ArrayList;

    class AppPage extends Page
    {
        private static $table_name = 'AppPage';
    }

    class AppPageController extends PageController
    {
    }

    class BlockPage extends Page
    {
        private static $table_name = 'BlockPage';
    }

    class BlockPageController extends PageController
    {
    }

    class SupportListingPage extends Page
    {
        private static $table_name = 'SupportListingPage';
    }

    class SupportListingPageController extends PageController
    {
        public function getSearchQuery(): string
        {
            return trim((string) $this->getRequest()->getVar('q'));
        }

        public function HelpCategories()
        {
            return $this->dataRecord
                ->Children()
                ->filter('ShowInMenus', 1)
                ->sort('Sort', 'ASC');
        }

        public function PopularArticles()
        {
            $items = $this->buildArticleList()
                ->sort('LastEdited', 'DESC');

            return $items;
        }

        public function FAQs(): ArrayList
        {
            return ArrayList::create();
        }

        private function buildArticleList()
        {
            $list = $this->dataRecord
                ->AllChildren()
                ->exclude('ShowInMenus', 0);

            $query = $this->getSearchQuery();
            if ($query !== '') {
                $list = $list->filterAny([
                    'Title:PartialMatch' => $query,
                    'Content:PartialMatch' => $query,
                ]);
            }

            return $list;
        }
    }
}
