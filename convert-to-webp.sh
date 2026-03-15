#!/bin/bash

# Script to convert all images in public/images to WebP format
# Preserves original files and creates .webp versions

IMAGE_DIR="public/images"
QUALITY=85  # Adjust quality (0-100, higher is better quality but larger file)

echo "Converting images to WebP format..."
echo "Quality setting: $QUALITY"
echo ""

# Counter for converted files
converted=0
failed=0

# Process each image file
for img in "$IMAGE_DIR"/*.{jpg,JPG,jpeg,JPEG,png,PNG}; do
  # Skip if file doesn't exist (handles case when no files match pattern)
  [ -e "$img" ] || continue

  # Get filename without extension
  filename=$(basename "$img")
  name="${filename%.*}"

  # Output WebP file path
  output="$IMAGE_DIR/${name}.webp"

  echo "Converting: $filename"

  # Convert to WebP
  if cwebp -q $QUALITY "$img" -o "$output" 2>/dev/null; then
    # Get file sizes for comparison
    original_size=$(stat -f%z "$img")
    new_size=$(stat -f%z "$output")
    reduction=$(echo "scale=1; (1 - $new_size/$original_size) * 100" | bc)

    echo "  ✓ Created: ${name}.webp"
    echo "  Original: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo $original_size bytes)"
    echo "  WebP: $(numfmt --to=iec-i --suffix=B $new_size 2>/dev/null || echo $new_size bytes)"
    echo "  Reduction: ${reduction}%"
    echo ""

    ((converted++))
  else
    echo "  ✗ Failed to convert: $filename"
    echo ""
    ((failed++))
  fi
done

echo "========================================="
echo "Conversion complete!"
echo "Successfully converted: $converted files"
[ $failed -gt 0 ] && echo "Failed: $failed files"
echo "========================================="
