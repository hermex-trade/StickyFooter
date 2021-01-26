<?php


namespace StickyFooter\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;

class StickyFooterWidget extends BaseWidget
{
    protected $template = "StickyFooter::Widgets.StickyFooter";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $offsets = $widgetSettings["offsets"]["mobile"];

        if (empty($offsets))
        {
            return [
                "data" => false
            ];
        }

        if ($offsets)
        {
            return [
                "data" => [
                    "offsets" => $offsets,
                ]
            ];
        }

        return [
            "footer_data" => false
        ];
    }

    public function getData()
    {
        return WidgetDataFactory::make("StickyFooter::StickyFooter")
            ->withLabel("Widget.stepsLabel")
            ->withPreviewImageUrl("/images/widgets/stickyFooter.svg")
            ->withMaxPerPage(1)
            ->withType(WidgetTypes::STATIC)
            ->toArray();
    }

    public function getSettings()
    {
        $settings = pluginApp(WidgetSettingsFactory::class);

        $settings->createCustomClass();
        $this->create_offset_settings($settings);

        return $settings->toArray();
    }

    /**
     * Create offset setting in widget options box.
     * The visibleFromOffset variable can be specified otherwise
     * a offset of 0px is assumed. Offset needs to be in px!!!!
     * @param $settings, the settings for the widget
     */
    private function create_offset_settings($settings): void
    {
        $offsets = $settings->createVerticalContainer("offsets")
            ->withName("Widget.offsetLabel");

        $offsets->children->createText("visibleFromOffset")
            ->withName("Widget.visibleFromOffsetLabel")
            ->withDefaultValue("0")
            ->withToolTip("Widget.showFooterTooltip");
    }

}
